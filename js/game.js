let canvas;
let world;


function init() {
  canvas = document.getElementById('canvas');
  world = new World(canvas);
  

  console.log("my character ist", world.character);
}
