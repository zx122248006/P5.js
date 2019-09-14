let x = 0;
let timer1;
let timer2;

function setup() {
  createCanvas(200, 200);
  timer1 = createP('timer1')
  timer2 = createP('timer2')
  
  makeTimer(timer1,50)
  makeTimer(timer2,150)
}

function makeTimer(ele,waitTime){
  let counter = 0;
  
  setInterval(timeIt,waitTime)
  
  //使用闭包的方式在函数内部再调用另一个函数，并在之前的函数中进行传参
  function timeIt(){
    ele.html(counter)
    counter++
  }
}

function draw() {
  background(0);
  line(x, 0, x, height)
  stroke(255)

  if (x > width) {
    x = 0
  } else {
    x++
  }
}