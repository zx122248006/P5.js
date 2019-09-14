let x = 0;

function setup() {
  createCanvas(600, 200);
  setTimeout(P, 2000)
}

function P() {
  createP('nihao')
}

function draw() {
  background(0);
  stroke(255)
  line(x, 0, x, height)

  x += 3

  if (x > width) {
    x = 0
  }
}