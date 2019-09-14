let bgcolor;
let button;
let slider
let input;
let nameP;

function setup() {
  canas = createCanvas(200, 200);
  bgcolor = color(200)
  createP('');
  button = createButton('点我吧')
  button.mousePressed(changeColor)

  slider = createSlider(1, 100, 5)

  nameP = createP('你的名字');
  input = createInput('')
  
  
  nameP.mouseOver(overpara)
  nameP.mouseOut(outpara)
}

function overpara(){
  nameP.html('your mouse is over me!')
}

function outpara (){
  nameP.html('your mouse is out')
}


function changeColor() {
  bgcolor = random(255)
}


function draw() {
  background(bgcolor);
  fill(255, 0, 175)
  ellipse(100, 100, slider.value() + random(-3, 3))
  // nameP.html(input.value())
  text(input.value(), 10, 20)
}