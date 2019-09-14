var col = {
  r: 0,
  g: 0,
  b: 0
}

function setup() {
  createCanvas(600, 400);

  background(250, 250, 100);
}

// background 存在的位置在setup中和在draw 中有很大的区别，在draw中，相当于每一次都会重新生成一个背景色，但是在setup 中则只会生成一次

function draw() {
  col.r = random(0, 255)
  col.g = random(0, 255)
  col.b = random(0, 255)


  //  ellipse
  noStroke()
  fill(col.r, col.g, col.b, 50); //填充色
  ellipse(mouseX, mouseY, 25, 25); //椭圆形

  // rectangle
  // fill(200, 250, 200);
  // rect(400, 100, 50, 50) //矩形
}

function mousePressed() {
  background(250, 250, 100)
}