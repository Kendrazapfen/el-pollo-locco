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
  throwingButtonPressed = false;

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
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
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
      this.checkCollactableCoin();
    }, 200);
  }

  checkCollisionen() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusbar.setPercentage(this.character.energy);
      }
    });
  }
  checkThrowObjects() {
    if (this.statusbarBottles.percentage >= 19) {
      if (this.keyboard.D && this.throwingButtonPressed == false) {
        this.throwingButtonPressed = true;
        let bottle = new ThrowableObject(
          this.character.x + 60,
          this.character.y + 73
        );
        this.throwableObject.push(bottle);
        this.updateStatusbar();
        this.character.removeBottle();
      }
    }
  }

  updateStatusbar() {
    let statusbar = this.statusbarBottles.percentage;
    statusbar -= 20;
    this.statusbarBottles.setPercentage(statusbar);
  }

  checkCollactableCoin() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin)) {
        this.characterCollectCoin(coin, index);
      }
    });
  }

  characterCollectCoin(coin, index) {
    this.character.collectCoin();
    this.statusbarCoins.setPercentage(this.character.coins);
    this.level.coins.splice(index, 1);
  }
  checkCollactableBottle() {
    this.level.bottles.forEach((bottle, index) => {
      if (this.character.isColliding(bottle)) {
        if (this.statusbarBottles.percentage == 100) {
          bottle.noCollectAwailable();
        } else if (!this.statusbarBottles.percentage == 100) {
          this.characterCollectBottle(bottle, index);
        }
      }
    });
  }

  characterCollectBottle(bottle, index) {
    this.character.collectBottle();
    this.statusbarBottles.setPercentage(this.character.bottles);
    this.level.bottles.splice(index, 1);
  }
}
