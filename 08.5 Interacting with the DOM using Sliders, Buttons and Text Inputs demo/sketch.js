let bgcolor;
let button;
let slider
let input;
let nameP;
let texta;

function setup() {
  canas = createCanvas(200, 200);
  bgcolor = color(200)
  createP('');
  button = createButton('点我吧')
  button1 = createButton('点我显示名字吧')
  createP('');
  button.mousePressed(changeColor)
  button1.mousePressed(changeText)
  //可以使用crateSlider 创建一个 滑动轴，获取滑动轴的方法是 .value()
  slider = createSlider(1, 100, 5)

  nameP = createP('你的名字');
  input = createInput('')
}


function changeColor() {
  bgcolor = random(255)
}

// 新增一个事件用于获取 input.value()的值，当这个值存在的时候 draw() 中的 判断语句才会生效，从而实现，点击这个事件的触发按钮之后，才会将文字显示在画布中
function changeText() {
  texta = input.value()
}

function draw() {
  background(bgcolor);
  fill(255, 0, 175)
  ellipse(100, 100, slider.value() + random(-3, 3))
  nameP.html(input.value())
  if (texta) {
    text(texta, 10, 20)
  }
}