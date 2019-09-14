function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255)
  strokeWeight(4)



  // for 循环中不使用 i++ 是因为 这个循环需要每隔50 递增，而不是每隔一个递增的
  for (var x = 0; x <= width; x = x + 50) {
    for (var y = 0; y <= height; y = y + 50) {
      fill(random(255), 0, random(255))
      ellipse(x, y, 25, 25)
    }
  }
}