// let gravity = 0.1;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y
    this.yspeed = 0
    this.history = [];
  }

  update () {
    // this.y += this.yspeed;
    // this.yspeed += gravity;

    this.x += random(-20, 20)
    this.y += random(-20, 20)

    //     if (this.y > height) {
    //       this.y = height;

    //       this.yspeed *= -0.3
    //     }

    if (this.history.length > 100) {
      this.history.splice(0, 1)
    }

    // 使用createVector 存储 当前的x 与当前的y 
    let v = createVector(this.x, this.y)
    this.history.push(v)
    // print(this.history.length)
  }

  show () {
    stroke(0)
    fill(0, 150)
    ellipse(this.x, this.y, 24, 24)

    noFill()
    beginShape();
    for (let i = 0; i < this.history.length; i++) {
      let pos = this.history[i]
      // fill(random(255))
      // ellipse(pos.x,pos.y,i,i)
      vertex(pos.x, pos.y)
    }
    endShape();

    // 使用 beginShape() 及 endShape() 函数可让创造更复杂的形状。
    // 在调用 beginShape() 函数之后，一系列 vertex() 函数必须接着调用。调用 endShape() 以停止绘制形状。每个形状都将会有由当时外线色所定义的外线色及当时的填充色。
  }


}