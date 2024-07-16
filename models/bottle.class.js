class Bottle extends MoveableObject {
  width = 80;
  height = 80;
  y = 340;
  offset = {
    top: 10,
    right: 30,
    bottom: 0,
    left: 20,
  };
  animationInterval;

  IMAGES = [
    'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
    'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
  ];

  constructor() {
    super().loadImage(this.IMAGES[0]);
    this.loadImages(this.IMAGES);
    this.x = 200 + Math.random() * 1900;
    this.animate();
  }

  animate() {
    this.animationInterval =
    setInterval(() => {
      this.playAnimation(this.IMAGES);
    }, 1200/5);
  }
}
