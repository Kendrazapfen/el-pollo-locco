class ThrowableObject extends MoveableObject {
  height = 60;
  width = 40;

  IMAGES_MOVING = [
    'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
  ];

  constructor(x, y) {
    super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
    this.loadImages(this.IMAGES_MOVING);
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
