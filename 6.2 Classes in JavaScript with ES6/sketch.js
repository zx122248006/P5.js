// let bubble = {
//   x: 300,
//   y: 200
// }

let bubble1;
let bubble2;

function setup () {
  createCanvas(600, 400);
  bubble1 = new Bubble(100,200);
  bubble2 = new Bubble(300,100);
}

function draw () {
  background(0);
  // move();
  // show()

  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}

// function move () {
//   noFill()
//   stroke(255)
//   strokeWeight(3)
//   // ellipse(bubble.x, bubble.y, random(255))
// }

// 使用ES6 的构造函数需要首先声明 constructor()

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move () {
    this.x = this.x + random(-5, 5)
    this.y = this.y + random(-5, 5)

  }

  show () {

    noFill()
    stroke(255)
    strokeWeight(3)
    ellipse(this.x, this.y, 24)
  }


}