let x = 0;

let timer;
let counter = 0
let interval;
let button;

function setup() {
  createCanvas(200, 200);
  timer = createP('tiemr')
  button = createButton('start timer')
  button.mousePressed(startTimer)

}

function startTimer() {
  interval = setInterval(timeIt, 500)
}

function stopTimer(){
  clearInterval(interval)
}

function timeIt() {
  timer.html(counter)
  counter++
}

function draw() {
  background(0);


  stroke(255)
  line(x, 0, x, height)

  x += 1;
  if (x > width) {
    x = 0
  }

}