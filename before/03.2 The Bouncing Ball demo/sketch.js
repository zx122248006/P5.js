var x = 0;
var speed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255)
  strokeWeight(4)
  noFill();
  ellipse(x, 200, 100, 100)

  x = x + speed

  if (x == width || x < 0) {
    speed = speed * -1
  }
  // 等同于 
  // if (x > width) {
  //   speed = -3
  // } else if (x < 0) {
  // speed = 3
  // }
}