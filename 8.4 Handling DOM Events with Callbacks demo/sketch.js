let bgcolor;
let button;

function setup() {
  canas = createCanvas(200, 200);
  // p5.js可以使用 create元素名 来动态创建dom元素
  bgcolor = color(200)
  // mousePressed 不仅是可以作为全局变量使用，还可以单独给某一个动态创建的元素使用，例如：
  button = createButton('点我吧')
  button.mousePressed(changeColor)
  //上诉例子就是将 button 标签赋值给button变量，并在button变量上调用 mousePressed方法
}

function draw() {
  background(bgcolor);
  fill(255, 0, 175)
  rect(100, 100, 50, 50)
}

function changeColor() {
  bgcolor = random(255)
}