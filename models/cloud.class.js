class Cloud extends MoveableObject {
  y = 7;
  width = 400;
  height = 300;
  

  constructor() {
    super().loadImage('img/5_background/layers/4_clouds/1.png');
    this.x = 1 + Math.random() * 1500;
    this.animate();
  }

  animate() {
    this.moveLeft();
  };

 
}
