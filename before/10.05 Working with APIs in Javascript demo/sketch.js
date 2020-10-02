let weather
function setup () {
  createCanvas(400, 400);
  loadJSON('https://www.tianqiapi.com/api/?version=v1&appid=76132995&appsecret=pUiPND3T&city=%E8%B4%B5%E9%98%B3', gotoData)


}

function gotoData (data) {
  console.log(data)
  weather = data;
}

function draw () {
  background(0);
  if (weather) {

    fill(255)
    for (let i = 0; i < weather.data.length; i++) {
      randomSeed(1)
      let temperature = weather.data[i].tem.substring(0, 2);
      let temNum = weather.data[i].tem;
      ellipse(50 * i + 50, 100, temperature * 2)
      text(temNum, 50 * i + 50 - temperature, 150)
    }
  }
}
