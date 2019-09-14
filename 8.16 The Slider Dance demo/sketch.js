let sliders = [];
let angle = 0;


function setup() {
  // createCanvas(200, 200);
  noCanvas()

  for (let i = 0; i < 50; i++) {
    sliders[i] = createSlider(0, 255, 50)
  }
}

function draw() {
  let offset = 0;
  for (let i = 0; i < sliders.length; i++) {
    let x = map(sin(angle+offset), -1, 1, 0, 255)
    sliders[i].value(x);
    offset += 0.1
  }
  // background(slider.value())

  angle += 0.1
}