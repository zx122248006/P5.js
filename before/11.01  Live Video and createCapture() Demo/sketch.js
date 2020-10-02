let video
function setup () {
  createCanvas(200, 150);
  background(220);

  // 使用 craeteCapture(VIDEO) 调用摄像头
  video = createCapture(VIDEO)

  // video.size 设置video窗口的大小
  video.size(200, 150)
}

function draw () {
  tint(255, 0, 150)

  // 在画布中载入一个图像，载入的图像是一个video，位置是0,0，宽度是跟随鼠标的X轴，高度就是这个画布的高度
  image(video, 0, 0,mouseX,height)
}