// 实现多个元素不重叠显示，实现的原理主要是通过 保存创建时的x,y 跟所有的x,y,进行对比，使用dist() 判断距离，如果距离大于 r1+r2,则说明不重叠

let circles = []; //1. 创建一个空数组

function setup () {
  createCanvas(640, 360);

  for (let i = 0; i < 25; i++) {
    // 2. 创建一个对象，用于存储x,y,r
    let circle = {
      x: random(width),
      y: random(height),
      r: 32
    }

    // 4. 
    for (let j = 0; j < circles.length; j++) {
      let other = circles[j].x;
      let d = dist(circle.x, circle.y, other.x, other.y)
    }

    // 3. 将创建的每一个对象传入到数组中
    circles.push(circle)

    // let x = random(width);
    // let y = random(height);
    // let r = 32;
    // fill(255, 0, 150, 100)
    // noStroke();
    // ellipse(x, y, r * 2, r * 2)

    // 
    for (let i = 0; i < circles.length; i++) {
      fill(255, 0, 150, 60)
      noStroke();
      ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2)

    }
  }
}

function draw () {
  // background(220);
}