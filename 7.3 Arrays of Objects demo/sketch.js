let bubbles = []

function setup () {
  createCanvas(600, 400);

  //   for (let i = 0; i < 10; i++) {
  //     let x = random (width);
  //     let y = random (height);
  //     let r = random (0,10)
  //     bubbles[i] = new Bubble(x, y, r)

  //   }
}

function draw () {
  background(0);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    // bubbles[i].move()
  }
}

function mousePressed () {
  let r = random(10)

  let b = new Bubble(mouseX, mouseY, r)

  bubbles.push(b)

}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move () {
    this.x = this.x + random(-5, 5)
    this.y = this.y + random(-5, 5)
  }


  show () {
    stroke(255)
    strokeWeight(4)
    noFill()
    ellipse(this.x, this.y, this.r * 2)
  }

}