let bubbles = []

// let bubbles;

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 5; i++) {

    let x = random(width)
    let y = random(height)
    let r = random(10, 50)

    let b = new Bubble(x, y, r)

    bubbles.push(b)
  }
}

function mouseDragged() {

  let x = random(width)
  let y = random(height)
  let r = 40

  let b = new Bubble(mouseX, mouseY, r)

  bubbles.push(b)

}


function mousePressed() {

  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].rollover(mouseX, mouseY)) {
      bubbles.splice(i, 1)

    }
  }

}

function draw() {
  background(0);

  //建议对于数组使用 降序 的方式

  for (let i = 0; i < bubbles.length; i++) {

    if (bubbles[i].rollover(mouseX, mouseY)) {

      bubbles[i].changeColor(255)
    } else {
      bubbles[i].changeColor(0)

    }
    bubbles[i].show();
    bubbles[i].move()

  }
  if (bubbles.length > 10) {

    bubbles.splice(0, 1)
  }


}


class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0
  }

  move() {
    this.x = this.x + random(-1, 1)
    this.y = this.y + random(-1, 1)
  }

  // clicked(px, py) {
  //   //判断是否在泡泡里面点击
  //   // 使用dist() 方法，可以计算两点之间的距离，获取4个参数，x1,y1,x2,y2，
  //   //根据两点之间的距离与这个气泡半径的对比，就能得出是否在气泡内

  changeColor(color) {
    this.brightness = color
  }

  rollover(px, py) {
    let d = dist(px, py, this.x, this.y)
    if (d < this.r) {
      return true
    } else {
      return false
    }
  }

  show() {
    stroke(255)
    strokeWeight(4)
    fill(this.brightness, 125)
    ellipse(this.x, this.y, this.r * 2)
  }

}