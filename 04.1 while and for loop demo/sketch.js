function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255)
  strokeWeight(4)

  var x = 0;
  while (x <= width) {
    fill(0, 200, 255);
    ellipse(x, 100, 25, 25)

    x = x + 50
  }

  // for 循环中不使用 i++ 是因为 这个循环需要每隔50 递增，而不是每隔一个递增的
  for (var i = 0; i <= width; i = i + 50) {
    fill(255, 0, 255)
    ellipse(i, 300, 25, 25)
  }
}