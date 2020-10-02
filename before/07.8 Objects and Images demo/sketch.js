let bubbles = []
let flower;
let trees = []

function preload () {
  flower = loadImage('flower.png');
  for (let i = 0; i < 1; i++) {
    trees[i] = loadImage(`tree1.png`)
  }
}

function setup () {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    let x = random(width)
    let y = random(height)
    let r = random(0, 150)
    let flowered = flower;
    let b = new Bubble(x, y, r, flowered)
    bubbles.push(b)
  }

}

function draw () {
  background(0);

  for (let b of bubbles) {
    b.show()
    b.move()
  }
}

function mousePressed () {
  for (let i = 0; i < bubbles.length; i++) {

    bubbles[i].clicked(mouseX, mouseY)
  }

}


class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.flower = img;
  }


  move () {
    this.x = this.x + random(-1, 1)
    this.y = this.y + random(-1, 1)
  }

  changeColor (color) {
    this.brightness = color
  }

  clicked (px, py) {
    // let d = dist(px, py, this.x, this.y)
    // if (d < this.r) {

    // 判断点击是否在这个图片之中，图片都是矩形，所以需要获取获取点击的位置 px 是否大于 图片位置的起始点 this.x 并且 小于图片的最终点 this.x+this.r 
    // 在 y 轴上也需要进行同样的判断
    if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
      this.flower = trees[0]
    }
  }

  show () {
    image(this.flower, this.x, this.y, this.r, this.r)
    // stroke(255)
    // strokeWeight(4)
    // fill(this.brightness, 125)
    // ellipse(this.x, this.y, this.r * 2)
  }

}