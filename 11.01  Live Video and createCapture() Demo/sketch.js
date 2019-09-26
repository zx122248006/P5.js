let video
function setup () {
  createCanvas(200, 150);
  background(220);
  // 使用 craeteCapture(VIDEO) 调用摄像头
  video = createCapture(VIDEO)
  video.size(200, 150)
}

function draw () {
  tint(255, 0, 150)
  image(video, 0, 0,mouseX,height)
}