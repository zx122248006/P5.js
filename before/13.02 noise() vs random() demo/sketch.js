let xoff = 0;
let yoff = 0;
function setup () {
  createCanvas(400, 400);
}

function draw () {
  background(51);

  // let x = 200;

  // let x = random(width)

  let x = map(noise(xoff), 0, 1, 0, width)
  let y = map(noise(yoff), 0, 1, 0, height)

  xoff += 0.001
  yoff += 0.002

  ellipse(x, y, 24, 24)
}