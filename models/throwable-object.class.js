class ThrowableObject extends MoveableObject {
  offset = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

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
  }

  throw() {
    this.animate();
    this.speedY = 30;
    this.applyGravity();
    setInterval(() => {
      this.x += 10;
    }, 50);
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_MOVING);
    }, 1000 / 20);
  }
}
