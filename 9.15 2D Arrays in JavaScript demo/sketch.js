let cols = 10;
let rows = 10;

let colors = [];

function setup () {
  createCanvas(300, 300);

  for (let i = 0; i < cols; i++) {
    // 1. 将数组的每一个索引的值就设置为数组
    colors[i] = []
    for (let j = 0; j < rows; j++) {
      // 2. 将索引的数组的第 j 项 设置为 随机的值
      colors[i][j] = random(255) 
    }

  }
}

function mousePressed() {
  setup()
  draw()
}


function draw () {
  background(51);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let x = i * 30;
      let y = j * 30;
      // 3. 将二维数组所对应的各项索引的值，循环作为矩形的填充色
      fill(colors[i][j])
      stroke(0)
      // fill(51)
      rect(x, y, 30, 30)
    }
  }
}