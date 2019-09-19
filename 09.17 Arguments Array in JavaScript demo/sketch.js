var paritcles = []

function setup () {
  createCanvas(200, 200);
  paritcles[0] = new Paritcle();
  paritcles[1] = new Paritcle(150, 50);
  // 创建一个 p5.Vector
  var v = createVector(150, 100);
  paritcles[2] = new Paritcle(v);
  paritcles[3] = new Paritcle('100,150');

}

function draw () {
  background(0);
  for (var i = 0; i < paritcles.length; i++) {
    paritcles[i].show()
  }
}

function Paritcle (a, b) {

  // instanceof 用于检测 参数a是否存在于 p5.Vector 中
  if (a instanceof p5.Vector) {
    this.x = a.x;
    this.y = a.y
  } else if (typeof (a) === 'string') {
    var nums = a.split(',')
    this.x = Number(nums[0])
    this.y = Number(nums[1])
  } else {
    this.x = a || 100;
    this.y = b || 100
  }


  // this.pos = createVector(width / 2, height / 2)

  this.show = function () {
    fill(255);
    ellipse(this.x, this.y, 16, 16)
  }

}