let video;

let vScale = 16;

function setup () {
  createCanvas(640, 480);
  video = createCapture(VIDEO)
  video.size(width / vScale, height / vScale)
}

function draw () {
  background(51);

  video.loadPixels();
  // 使video 将显示窗口的像素资料加载到 pixels[] 数组里。这函数必须在读写 pixels[] 之前被调用。注意只有使用 set() 或直接修改 pixels[] 的改变会发生。
z
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
      // 当三个表示一个点的数组都是birght时，表示画面是灰色的
      // pixels[index] = r;
      // pixels[index + 1] = g;
      // pixels[index + 2] = b;
      // pixels[index + 3] = 255;


      let w = map(bright, 0, 255, 0, vScale)


      fill(255)
      // noStroke()
      rectMode(CENTER)
      rect(x * vScale, y * vScale, w, w)
    }
  }

  // pixels[0] = 255;
  // pixels[1] = 255;
  // pixels[2] = 255;
  // pixels[3] = 255;

  // updatePixels()
}