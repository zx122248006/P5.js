let circles = [];

function setup() {
  createCanvas(640, 360);

  let num = 0;
  while (circles.length < 5000) {
    //   for (let i = 0; i < 25; i++) {

    let circle = {
      x: random(width),
      y: random(height),
      r: random(1, 10)
    }
    let t = false //用于设置默认圆之间不重叠
    for (let j = 0; j < circles.length; j++) {
      let other = circles[j]; // other 获取其他的圆 获取其他圆的x,y,r
      let d = dist(circle.x, circle.y, other.x, other.y); // dist() 获取当前圆与其他圆的距离

      if (d < circle.r + other.r) {
        // 判断当前圆是否小于其他圆的距离小于两个圆的半径之和，如果小于，则是重叠的。只要有一个圆是重叠的，就可以跳出这个判断，并且将之前用于判断的 t 设置为 true
        t = true
        break;
      }
    }

    // 判断t 为 false 时，将合格的不重叠的点，添加到circles的数组中。
    if (!t) {
      circles.push(circle)
    }

    // let x = random(width);
    // let y = random(height)
    // let r = 32;


    // fill(255, 0, 150, 100)
    // noStroke();
    // ellipse(x, y, r * 2, r * 2)

    num++;
    if (num > 30000) {
      break
    }
    // 由于不知道循环次数，所以使用了 while 循环，但是while 循环很危险，所以增加了一个保护跳出的判断
  }

  //for 循环将数组展示到画布上去
  for (let i = 0; i < circles.length; i++) {
    fill(255, 0, 150, 100)
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2)
  }
}

function draw() {
  // background(220);
}