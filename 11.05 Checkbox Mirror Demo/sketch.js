let video;

let vScale = 16;
let slider;

let cols = 40;
let rows = 30;

// 使用一个数组存储所有的input
let boxes = [];

function setup () {
  createCanvas(640, 480);
  pixelDensity(1)
  video = createCapture(VIDEO)
  video.size(cols, rows)
  slider = createSlider(0, 255, 77)

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {

      // 创建input 共计1200个
      let box = createCheckbox()
      box.parent('mirror')

      boxes.push(box)
    }
    // let linebreak = createSpan('<br/>')
    // linebreak.parent('mirror')

  }

}

function draw () {
  background(51);

  video.loadPixels();
  // 使video 将显示窗口的像素资料加载到 pixels[] 数组里。这函数必须在读写 pixels[] 之前被调用。

  // loadPixels()

  // 这次是要实现像素的效果

  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      // let index = (x + y * video.width) * 4

      // video.width -x +1 可以使得画面的镜像显示
      let index = (video.width - x + 1 + y * video.width) * 4

      let r = video.pixels[index + 0]
      let g = video.pixels[index + 1]
      let b = video.pixels[index + 2]

      // birght 是亮度
      let bright = (r + g + b) / 3

      // 新建一个阈值，当大于这个数时设置填充为 白色 否则为黑色
      // 使这个阈值根据滑动轴来控制
      let threshold = slider.value();

      let checkIndex = x + y * cols;

      if (bright > threshold) {
        fill(255)
        boxes[checkIndex].checked(false)
      } else {
        fill(0)
        boxes[checkIndex].checked(true)
      }



      // let w = map(bright, 0, 255, 0, vScale)


      // fill(255)
      noStroke()
      rectMode(CENTER)
      // rect(x * vScale, y * vScale, w, w)
      // 由于取消了亮度的映射，所以使用 vScale 值来设定 矩形的宽高
      rect(x * vScale, y * vScale, vScale, vScale)
    }
  }

  // pixels[0] = 255;
  // pixels[1] = 255;
  // pixels[2] = 255;
  // pixels[3] = 255;

  // updatePixels()
}