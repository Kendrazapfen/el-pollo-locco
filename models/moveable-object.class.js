class MoveableObject {
  x = 120;
  y = 280;
  img;
  width = 150;
  height = 150;
  
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log("Moving right");
  }

  moveLeft() {}
}
