var ball = {
  x: 300,
  y: 200,
  xspeed: 10,
  yspeed: -10
}

function setup () {
  createCanvas(600, 400);
}

function draw () {
  background(0);

  move()

  bounce()

  display()

}

function mousePressed () {
  ball.xspeed = random(-10, 10)
  ball.yspeed = random(-5, 5)
}

function move () {

  ball.x += ball.xspeed
  ball.y += ball.yspeed
}

function bounce () {

  // 实现的原理是根据绘制的小球的x和y轴的值，进行判断，当x轴的值小于0或者大于画布的宽度时，让当前的xspeed 的值为相反数，y轴同理
  if (ball.x >= width || ball.x <= 0) {
    ball.xspeed = -ball.xspeed
  }

  if (ball.y >= height || ball.y <= 0) {
    ball.yspeed = -ball.yspeed
  }
}

function display () {


  // noFill()
  fill(random(255), random(255), random(255))
  stroke(255)
  strokeWeight(4)
  ellipse(ball.x, ball.y, 24, 24)
}