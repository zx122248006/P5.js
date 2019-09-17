let p;
function setup () {
  createCanvas(400, 400);
  p = createSlider(1, 20, 1, 0.1)

  // angleMode(DEGREES)



}
function draw () {
  background(0)

  noFill()
  stroke(255)

  strokeWeight(4)
  point(100, 200)
  point(150, 50)
  point(250, 50)
  point(300, 200)

  strokeWeight(1)
  // 自定义图形，使用 beginShape() 和 endShape() 创建自定义图形
  // 并且在两个方法之间使用 vertex() 定义顶点位置
  // 最后在endShape()中使用CLOSE 闭合，此处的可以填写的mode其他类型
  // beginShape 中也有几种类型可以选择 
  // 具体参看 https://p5js.org/zh-Hans/reference/#/p5/beginShape

  beginShape()

  // let spacing = 50;
  // let spacing = map(mouseX, 0, width, 5, 100)


  // vertex(100, 50)
  // vertex(200, 20)
  // vertex(200, 100)
  // vertex(50, 75)
  // vertex(25, 50)
  // curveVertex(mouseX, mouseY)

  // // 使用两次相同的坐标 使得进入和结束的点不会左右偏移
  // curveVertex(100, 200)
  // curveVertex(100, 200)
  // curveVertex(150, 50)
  // curveVertex(250, 50)
  // curveVertex(300, 200)
  // curveVertex(300, 200)

  for (let a = 0; a < 360; a += p.value()) {

  // for (let a = 0; a < 360; a += spacing) {
    let x = 100 * sin(a) + 200; // 增加200 是用于当 a =0 时 原点在canvas 正中
    let y = 100 * cos(a) + 200; // 100 用于设置图形的大小

    curveVertex(x, y)
    // vertex(x, y)
  }
  endShape(CLOSE)
}