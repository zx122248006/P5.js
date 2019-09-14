var circle1 = {
  x: 0,
  y: 200,
  diameter: 50
};

var grba1 = {
  r: 218,
  g: 160,
  b: 221
}



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(grba1.r, grba1.g, grba1.b);

  fill(250, 200, 200)
  ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter)

  circle1.x = circle1.x + 1
}