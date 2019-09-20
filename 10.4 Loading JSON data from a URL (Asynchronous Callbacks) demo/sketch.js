// function preload(){
//   data =loadJSON('./birds.json')
// }
let x = 0;
let spaceData;

function setup () {
  createCanvas(400, 400);
  loadJSON('http://api.open-notify.org/astros.json', gotData, 'json')
}
function gotData (data) {
  console.log(data)
  spaceData = data;
}

function draw () {
  background(0);
  // 在draw() 触发时，loadJSON()还没有获取到数据，所以需要增加判断
  if (spaceData) {
    randomSeed(4) // 可以使用randomSeed() 使得下面的random()不会随意改变
    for (let i = 0; i < spaceData.number; i++) {
      fill(255)
      ellipse(random(width), random(height), 16, 16)
    }
  }

  stroke(255)
  line(x, 0, x, height)
  x++;
  if (x > width) {
    x = 0
  }
}