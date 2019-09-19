let bgcolor;
let text;
function setup() {
  createCanvas(200, 200);
  bgcolor = color(255)
  text = createP('some text');
  button = createButton('go')
  button.mousePressed(changeBg)
  text.mouseOver(overChange)
  text.mouseOut(outChange)
}

function overChange(){
  text.style('background-color','pink')
  text.style('padding','24px')
}

function outChange(){
  text.style('background-color','green')
  text.style('padding','8px')
}

function draw() {
  background(bgcolor);
  
  fill(255,0,100)
  ellipse(100,100,50)
}

function changeBg () {
  bgcolor = random(255)
}