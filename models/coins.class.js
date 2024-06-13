class Coins extends MoveableObject {
  width = 100;
  height = 100;
  y = 300;
  offset = {
    top: 60,
    right: 80,
    bottom: 110,
    left: 50,
  };

  IMAGES = ['img/8_coin/coin_1.png', 'img/8_coin/coin_2.png'];

  constructor() {
    super().loadImage(this.IMAGES[0]);
    this.loadImages(this.IMAGES);
    this.x = 200 + Math.random() * 500;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES);
    }, 1000 / 5);
  }
}
