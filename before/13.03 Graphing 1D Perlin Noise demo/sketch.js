// let xoff = 0;
// let yoff = 1000;

// 定义一个偏移值
let inc = 0.01

// 定义一个起始值
let start = 0;

let Vslider

function setup () {
  createCanvas(400, 400);
  Vslider = createSlider(0.001, 0.1, 0, 0.001);

}

function draw () {
  background(51);
  inc = Vslider.value()
  // 使用noFill()是为了使用 beginShape() 其样式为线条，而不是一个面

  stroke(255)
  noFill()
  beginShape()

  // 定义一个偏移量为起始值
  let xoff = start;

  for (x = 0; x < width; x++) {
    stroke(255)
    // let y = random(height);

    let y = map(noise(xoff), 0, 1, 0, width)
    // 使 noise 映射到一个值上面

    // let y = height / 2 + sin(xoff) * height / 2;


    vertex(x, y)
    // xoff += 0.01;


    // 让偏移量增加偏移值
    xoff += inc;
  }
  endShape()

  // 让起始值增加偏移值
  start += inc;

  // 当起始值和偏移量都增加 【偏移值】 之后，就会形成电波图一样的效果

  // vertex 所有形状都是由连接一系列顶点形成的。vertex() 可用于定义点、线、三角形、四角形及多边形的顶点坐标。它只能在 beginShape() 和 endShape() 函数之间使用。

  // noLoop();

  // stroke(255)
  // line(0, height/2, width,height/2)


  // let x = 200;

  // let x = random(width)

  // let x = map(noise(xoff), 0, 1, 0, width)
  // let y = map(noise(yoff), 0, 1, 0, height)

  // xoff += 0.01
  // yoff += 0.01

  // ellipse(x, y, 24, 24)
}