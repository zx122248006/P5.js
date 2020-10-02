class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(10, 24)
  }

  update () {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    // 限制一个数字于最低值与最高值之间。
    // 限制 this.x 在0 到宽度之间
    this.x = constrain(this.x, 0, width)
    this.y = constrain(this.y, 0, height)
  }

  show () {
    noStroke()
    // 获取视频捕获的画面中的颜色
    let px = floor(this.x / vScale);
    let py = floor(this.y / vScale);
    
    let col = video.get(px, py);
    // console.log(col)
    fill(col[0], col[1], col[2], 150)
    ellipse(this.x, this.y, this.r, this.r)
  }
}