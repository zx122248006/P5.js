// let xoff = 0;
// let yoff = 1000;

// 定义一个偏移值
let inc = 0.01
let Vslide;


function setup () {
  createCanvas(200, 200);
  // pixelDensity(1)
  Vslide = createSlider(0.01, 0.1, 0.01, 0.001)
}

function draw () {
  let yoff = 0;
  loadPixels();
  // background(51);
  inc = Vslide.value()

  for (x = 0; x < width; x++) {
    let xoff = 0;
    for (y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      // let r = random(255)
      let r = noise(xoff, yoff) * 255
      pixels[index] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255
      xoff += inc
    }
    yoff += inc
  }
  updatePixels()

  // noLoop()
}