let bubbles1;
let bubbles2;

function setup () {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200)
  bubble2 = new Bubble(400, 200, 100)
}

function draw () {
  background(0);

  // dist()可以用于判断两个泡泡的距离，如果相交了，可以改变背景颜色，并且这段判断需要放在bubble1.show() 之类代码的前面。
  // let d = dist(bubble1.x, bubble1.y, bubble2.x, bubble2.y)
  // if (bubble1.r + bubble2.r > d) {background(200, 0, 100)}


  // 但是此时只存在两个泡泡，如果存在更多的泡泡，我们就应该使用别的方法，应该将dist()的方法进行封装改进
  // 下面使用了一个新的方法进行封装
  if (bubble1.intersects(bubble2)) {
    background(200, 0, 100)
  }

  bubble1.show();
  bubble2.show();
  bubble1.move();
  bubble2.x = mouseX;
  bubble2.y = mouseY
  bubble2.move()

}

class Bubble {
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0
  }

  intersects (other) {
    let d = dist(this.x, this.y, other.x, other.y)
    // if (this.r + other.r > d) {
    //   return true
    // } else {
    //   return false
    // }

    // 此处 可以简写 为 this.r + other.r > d 
    return this.r + other.r > d ? true : false

  }

  move () {
    this.x = this.x + random(-1, 1)
    this.y = this.y + random(-1, 1)
  }

  changeColor (color) {
    this.brightness = color
  }

  rollover (px, py) {
    let d = dist(px, py, this.x, this.y)
    if (d < this.r) {
      return true
    } else {
      return false
    }
  }

  show () {
    stroke(255)
    strokeWeight(4)
    fill(this.brightness, 125)
    ellipse(this.x, this.y, this.r * 2)
  }

}