function Paritcle () {
  this.x = 100;
  this.y = 99;
}

function Confetti () {
  // 继承功能，使用第一个构造函数的名称，再增加.call(this) 就可以在Confetti 继承Paritcle 的功能
  // 但是 prototype 中的功能是没有继承的
  Paritcle.call(this)
}

Paritcle.prototype.update = function () {
  this.x += random(-5, 5)
  this.y += random(-5, 5)
}

Paritcle.prototype.show = function () {
  stroke(255)
  strokeWeight(8)
  point(this.x, this.y)
}

// Confetti.prototype = Paritcle.prototype;

// 为了继承之后，再增加增加的方法，需要使用 Object.create 
Confetti.prototype = Object.create(Paritcle.prototype)


Confetti.prototype.show = function () {
  stroke(255, 0, 255)
  noFill()
  strokeWeight(4)
  square(this.x, this.y, 50)
}


var p;
var c

function setup () {
  createCanvas(600, 300);
  p = new Paritcle();
  c = new Confetti();
  // c.show()
}

function draw () {
  background(0);
  p.update();
  p.show();
  c.update()
  c.show();
} 
