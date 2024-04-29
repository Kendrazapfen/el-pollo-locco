class SmallChicken extends MoveableObject {
    y = 370;
    width = 50;
    height = 50;
    IMAGES_WALKING = [
      'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
      'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
      'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];
  
    constructor() {
      super().loadImage(this.IMAGES_WALKING[0]);
      this.loadImages(this.IMAGES_WALKING);
      this.x = 200 + Math.random() * 500;
      this.speed = 0.15 + Math.random() * 0.25;
      this.animate();
    }
  
    animate() {
      this.moveLeft();
      setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
      }, 1000/5);
    }
  }