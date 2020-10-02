let video;
let button;
let snapshots = [];
let counter = 0;
let total = 43

// 使用按钮，将捕获的视频内容存放到画布中
function setup () {
  createCanvas(800, 240);
  background(220);
  video = createCapture(VIDEO, redady)
  video.size(320, 240)
  // button = createButton('snap')
  // button.mousePressed(takesnap)
}

let go = false;

function redady () {
  go = true;
}

// function takesnap () {
  // 点击按钮之后，将当前的画面添加到画布中
  // image(video, 0, 0,mouseX,height)
// }

function draw () {
  //   // tint(255, 0, 150)
  //   // image(video, 0, 0,mouseX,height)

  if (go) {
    snapshots[counter] = video.get()
    counter++;

    if (counter == total) {
      counter = 0
    }
  }

  let w = 80;
  let h = 60;
  let x = 0;
  let y = 0;
  for (let i = 0; i < snapshots.length; i++) {

    // tint(255, 50)

    // ???笔记本卡。。不知道怎么来的。
    // farmeCount 是每秒的帧数
    let index = (i + frameCount) % snapshots.length

    // console.log((i + frameCount))

    image(snapshots[index], x, y, w, h);
    x = x + w;
    if (x > width) {
      x = 0;
      y = y + h
    }
  }



}