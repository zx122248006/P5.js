let graphics;
let x = 50;
let y = 50;
let angle =0
function setup () {
  createCanvas(400, 400);
  // pixelDensity(1) // 设置graphics 像素密度，
  graphics = createGraphics(100, 100) //创建一个新的图形画布
  // graphics.background(100);
  graphics.fill(100)
  graphics.ellipse(50,50,100)
}

function draw () {
  background(0)
  // background(51)
  // if(mouseIsPressed){
  //   fill(255)
  //   stroke(255)
  //   ellipse(mouseX, mouseY, 20)
  // }

  // if(mouseIsPressed){
  //   graphics.fill(255)
  //   graphics.stroke(255)
  //   graphics.ellipse(mouseX, mouseY, 20)
  // }

  graphics.fill(255)
  graphics.stroke(255)
  graphics.ellipse(x, y, 10)
  x += random(-5, 5)
  y += random(-5, 5)

  //在 draw()中使用image 添加到画布中去
  image(graphics, mouseX, mouseY)
  image(graphics, 100, 100)

  imageMode(CENTER)
  push();
  tint(0, 255, 0)
  translate(200, 200)
  rotate(angle)
  image(graphics,0, 0)
  pop();

  angle +=0.05

  // fill(255, 0, 255)
  // ellipse(mouseX, mouseY, 10)
}





