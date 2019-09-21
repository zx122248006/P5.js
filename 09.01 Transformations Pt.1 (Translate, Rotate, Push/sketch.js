let angle = 0;
let x = 50;
let y = 50;

function setup() {
  createCanvas(400, 400);

  // angleMode 定义当时 p5 的角度模式，如果没有定义，默认模式为 RADIANS（弧度）
  angleMode(DEGREES)

  rectMode(CENTER)
}

function draw() {
  background(0);

  push()
  // translate 用于改变当前绘图的坐标原点，使用之后，在之后创建的图形，参考坐标系会参考 translate 的坐标，而不是 画布的坐标
  translate(50, 50)
  // 另外，如果要想使得矩形旋转的情况，x y 轴也发生改变，需要改变的是translate 的左边，而不能改变 rect() 的坐标。


  rotate(angle)
  fill(255)
  rect(0, 0, 100, 50)
  pop()

  // push() 以及 pop() 方法用于存储当前的 translate 画布状态，以及重置画布状态，保证translate 只在 push()和pop() 之间产生作用

  angle += 5

  translate(300, 300)
  rotate(-angle * 2)

  fill(255, 200, 10)
  rect(0, 0, 100, 50)

}