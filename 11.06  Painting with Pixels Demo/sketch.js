let video;
let vScale = 16;

// let particle;
// 使用数组来存储描绘的点
let particles = [];
function setup () {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);

  for (let i = 0; i < 200; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
  // background(51);
}

function draw () {
  background(51);
  video.loadPixels();

  // 将点进行循环
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();

  }

}