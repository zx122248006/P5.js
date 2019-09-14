var r = 0
var b = 0;
var g = 0;
var a = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background(r, g, b,a);

  // r = map(mouseY, 0, 600, 0, 255)
  // g = map(mouseY, 0, 600, 255, 0)
  // b = map(mouseY, 0, 600, 0, 255)
  //  a = map(mouseX, 0, 100, 255, 0)
  //   map()方法可以将一个值的范围映射到另外一个值上，
  //   实际上就是将0到255的范围，映射到0到600上

  background(b)
  
  b = map(mouseX,0,width,0,255,true)
  
  print(b+' '+mouseX)
  
  fill(250, 118, 222)
  ellipse(mouseX, mouseY, 55, 55)
}