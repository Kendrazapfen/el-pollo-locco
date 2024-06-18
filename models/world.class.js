class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusbar = new Statusbar();
  statusbarCoins = new StatusbarCoins();
  statusbarBottles = new StatusbarBottles();
  throwableObject = [];
  collectedCoins = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.ctx.translate(-this.camera_x, 0);
    this.addObjectsToMap(this.level.clouds);
    this.addToMap(this.statusbar);
    this.addToMap(this.statusbarCoins);
    this.addToMap(this.statusbarBottles);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.enemies);
    this.addToMap(this.character);
    this.addObjectsToMap(this.throwableObject);
    this.addObjectsToMap(this.level.coin);
    this.addObjectsToMap(this.level.bottle);
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  run() {
    setInterval(() => {
      this.checkCollisionen();
      this.checkThrowObjects();
    }, 200);
  }

  checkCollisionen() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusbar.setPercentage(this.character.energy);
      }
    });
    this.level.coin.forEach((c) => {
      let coin = [new Coins(), new Coins(), new Coins(), new Coins()];
      this.collectedCoins.push(coin);
      if (this.character.isColliding(c)) {
        this.statusbarCoins.setPercentage(this.level.colletedCoins);
      }
    });
  }
  checkThrowObjects() {
    if (this.keyboard.D) {
      let bottle = new ThrowableObject(
        this.character.x + 45,
        this.character.y + 45
      );
      this.throwableObject.push(bottle);
    }
  }
}
