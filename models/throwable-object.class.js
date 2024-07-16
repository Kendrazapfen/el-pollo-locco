class ThrowableObject extends MoveableObject {
  releaseGravityInterval;
  height = 60;
  width = 40;

  IMAGES_MOVING = [
    'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
  ];
  IMAGES_SPLASH = [
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
  ];

  constructor(x, y) {
    super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
    this.loadImages(this.IMAGES_MOVING);
    this.loadImages(this.IMAGES_SPLASH);
    this.x = x;
    this.y = y;
    this.throw();
    this.rotateBottle();
  }

  throw() {
    if (this.world.character.otherDirection) {
      this.throwBottleToLeft();
    } else {
      this.throwBottleToRight();
    }
    setTimeout(() => {
      world.throwingButtonPressed = false;
    }, 1500);
  }

  throwBottleToLeft() {
    this.x = this.x - 90;
    this.y = this.y - 35;
    this.speedY = 16;
    this.applyGravity();
    this.throwableObject = setInterval(() => {
      this.rotateBottle();
      this.x -= 18;
    }, 30);
    this.releaseGravity();
  }

  throwBottleToRight() {
    this.speedY = 16;
    this.applyGravity();
    this.throwableObject = setInterval(() => {
      this.rotateBottle();
      this.x += 18;
    }, 30);
    this.releaseGravity();
  }

  rotateBottle() {
    this.playAnimation(this.IMAGES_MOVING);
  }

  releaseGravity() {
    this.releaseGravityInterval = setInterval(() => {
      if (this.y >= 340) {
        this.y = 345;
        this.speedY = 0;
        clearInterval(this.throwableObject);
        this.splash();
      }
    }, 25);
  }

  splash() {
    this.speedY = 0;
    this.clearBottleInterval();
    this.playAnimation(this.IMAGES_SPLASH);
    this.removeBottleOfMap();
  }

  clearBottleInterval() {
    clearInterval(this.throwableObject);
    clearInterval(this.releaseGravityInterval);
    clearInterval(this.applyGravityInterval);
  }

  removeBottleOfMap() {
    setTimeout(() => {
      world.throwableObject.splice(0, 1);
    }, 225);
  }

  removeBottleOfMap() {
    setTimeout(() => {
      world.throwableObject.splice(0, 1);
    }, 225);
  }
}
