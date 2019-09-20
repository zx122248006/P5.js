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

  let temperature
  let b
  let temNum
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
      stroke(255)
      
      temperature = weather.data[i].tem.substring(0, 2); // 获取温度数据
      b = createVector(70 * i + 70, temperature * 10) // 将温度数据变为对象

      temNum = weather.data[i].tem; // 获取温度文字


      stroke(255)
      strokeWeight(1)
      point(b.x-20 , b.y+60)

      strokeWeight(1)
      line(b.x-20 , b.y+60, 20, 300)
      ellipse(70 * i + 50, 100, temperature * 2)
      text(temNum, 70 * i + 60 - temperature, 150)
    }
  }
}

