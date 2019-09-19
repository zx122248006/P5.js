let x = 100;
let y = 100;

function setup() {
  canvas=createCanvas(200, 200);
  canvas.position(400,500)
 h1 = createElement('h1','hello')
  
}

function draw() {
  background(0)
  fill(255,0,0)
  rect(x,y,50,50)
  h1.position(x,y)
  x = x + random(-5,5)
}

