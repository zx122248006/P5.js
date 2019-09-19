function setup() {
  createCanvas(400, 300)
  print('hello')
}

function draw() {
  background(100);

  rectMode(CENTER);

  fill(0, 255, 0);
  stroke(0, 0, 255);
  strokeWeight(1);
  rect(200, 150, 150, 150);

  fill(255, 0, 0, 160);
  noStroke();
  ellipse(150, 250, 100, 75);

}