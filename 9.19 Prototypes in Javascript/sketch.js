// class Paritcle{
//   constructor(){
//     this.x = 100;
//     this.y = 99;
//   }
// }


function Paritcle () {
  this.x = 100;
  this.y = 99;

  // this.show = function(){
  //   point(this.x,this.y)
  // }
}

// 添加原型链的方式添加新的方法，例如 p5.Vector的方法就可以通过 createVector创建新的p5.Vector
// 可以在浏览器中使用 变量名 v 下的 __proto__ 查看具体有那些原型链的方法
Paritcle.prototype.show = function(){
  point(this.x,this.y)
}

// var p = new Paritcle();

var p;
var v;


p5.Vector.prototype.double = function (){
  this.x *=2;
  this.y *=2;
  this.z *=2;
}

function setup () {
  createCanvas(600, 300);
  p = new Paritcle();
  v = createVector(3, 4)
}

function draw () {
  background(220);
} 

// 原型链主要是为了解决面向对象的缺点，每一个实例对象，都有自己的属性和方法的副本。这不仅无法做到数据共享，也是极大的资源浪费
// 让一些可以通用的方法或数据，进行贡献，例如 car1 car2 是两个不同的车，需要两个不同的函数来表示，但是这两个都有一个共同点，都是车。
// 需要将车这个方法或数据，放在prototype 中就可以了
// 详情可以看 http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html
