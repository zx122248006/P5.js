let bubbles = []
// let cat;

function setup () {
  createCanvas(600, 400);
  for (let i = 0; i < 100; i++) {
    let x = random(width)
    let y = random(height)
    let r = random(5, 8)

    bubbles[i] = new Bubble(x, y, r)
  }

  // cat = new Bubble(40, 20, 20)
}

function draw () {
  background(0);

  // if (bubble1.intersects(bubble2)) {
  //   background(200, 0, 100)
  // }

  // 除了可以使用 以前的for 循环以外，还可以尝试使用es6提供的for of 循环数组。实现的效果是一样的
  // for (let i = 0; i < bubbles.length; i++) {
  //   bubbles[i].show();
  //   bubbles[i].move();
  // }

  // cat.x = mouseX;
  // cat.y = mouseY
  // cat.show();
  // cat.move();

  for (let b of bubbles) {
    b.show()
    b.move()
    let overlapping = false;
    for (let other of bubbles) {
      // if 中先判断不等于 b 不等于 other 是为了避免泡泡自己跟自己 设置了颜色
      if (b !== other && b.intersects(other)) {
        overlapping = true;
      }
    }
    // 直接在for 循环中 改变 颜色，同时会存在相交于不相交的，所以转而改变一个 值的 布尔值，这个布尔值存在相交于不相交同时存在的情况，所以使用布尔值来判断是否改变颜色
    if (overlapping) {
      b.changeColor(255)
    } else {
      b.changeColor(0)
    }
  }

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