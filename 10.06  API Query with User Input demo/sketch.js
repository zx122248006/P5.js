let weather
let url = 'https://www.tianqiapi.com/api/?version=v1&'
let city = '三亚'
let appid = 'appid=76132995&'
let appsecret = 'appsecret=pUiPND3T&city='

let input;

function setup () {
  createCanvas(600, 400);

  // p5.js 中使用 select 获取 dom 元素
  let button = select('#submit')

  button.mousePressed(weatherAsk)
  input = select('#city')
}

function weatherAsk () {
  city = input.value()
  let api = url + appid + appsecret + city
  loadJSON(api, gotoData)
  console.log(input.value())
}

function gotoData (data) {
  // console.log(data)
  weather = data;
}

function draw () {
  background(51);

  let t;
  let b;
  let temNum;
  let totalT = []
  if (weather) {
    fill(255)


    // var reached = [];
    // var unreached = [];

    // for (var i = 0; i < vertices.length; i++) {
    //   unreached.push(vertices[i])
    // }

    // reached.push(unreached[0])
    // unreached.splice(0, 1)


    for (let i = 0; i < weather.data.length; i++) {

      t = weather.data[i].tem.substring(0, 2); // 获取温度数据
      b = createVector(70 * i + 70, 400 - (t * 10 + 70)) // 将温度数据变为对象
      // 使用400减去的值，是为了改变坐标轴的正反，如果不使用400减去值，会导致 17°在15°的上方。
      // 这是因为canvas的画布原点在左上角

      totalT.push(b)



      temNum = weather.data[i].tem; // 获取温度文字


      noStroke(0)
      strokeWeight(1)
      ellipse(70 * i + 50, 100, t * 2)
      text(temNum, 70 * i + 60 - t, 210)

      stroke(255)
      strokeWeight(8)
      point(b.x - 20, b.y + 60)

      // line(b.x - 20, b.y + 60, 20, 300)

    }

    // console.log(totalT)
    // 7天总共有6条线，所以总计的温度天数需要减1，然后进行循环
    for (let i = 0; i < totalT.length - 1; i++) {
      let d1_x = totalT[i].x - 20 // 第一天的x
      let d1_y = totalT[i].y + 60 // 第一天的y
      let d2_x = totalT[i + 1].x - 20 //第二天的x
      let d2_y = totalT[i + 1].y + 60 //第二天的y
      
      // 每一条线的点分别是第一天的x和y,第二天的x和y。
      strokeWeight(1)
      line(d1_x, d1_y, d2_x, d2_y)
    }
  }
}

