var flower;

// 使用loadJSON() 获取josn 数据，并且获取数据应该在 preload 中获取数据


function preload(){
    flower = loadJSON("./flower.json")
}

function setup () {
  createCanvas(400, 400);
  // 创建一个flower 对象存储数据
  
  // flower = loadJSON("./flower.json")

  // flower = {
  //   name: 'sunflower',
  //   col: color(200, 220, 0)
  // }
}

function draw () {
  background(0);

  fill(flower.r,flower.g,flower.b)
  text(flower.name,10,50)
}