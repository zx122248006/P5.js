var on = false

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (on) {
    background(0, 255, 0)
  } else {
    background(0);
  }

  noFill()
  stroke(255)
  strokeWeight(4)


  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    fill(255, 0, 200)
  }

  rectMode(CENTER)
  rect(300, 200, 100, 100)
}

function mousePressed() {

  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    on = !on
  }
}

//   if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
//     if (mouseIsPressed) {
//       background(0, 255, 0)
//  }
//     fill(255, 0, 200)
//   }