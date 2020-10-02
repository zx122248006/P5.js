
var lineX = 0;

var issX = 0;
var issY = 0;

var api = 'http://api.open-notify.org/iss-now.json'
function setup () {
  createCanvas(600, 400);
  
  setInterval(askISS,1000)

  // loadJSON(api, gotoData)
}

function askISS(){
  
  loadJSON(api, gotoData)
}

function gotoData (data) {

  var lat = data.iss_position.latitude
  var long = data.iss_position.longitude

  // 将空间站的经纬度映射给 0到宽度和 0到高度
  issX = map(lat, -52, -50, 0, width)
  issY = map(long, -90, 0, 0, height)
  
  console.log(issX)
  console.log(issY)
}

function draw () {
  // translate(width/2, height/2)
  background(51);

  fill(255)
  ellipse(issX, issY, 24, 24)

  stroke(255)
  line(lineX, 0, lineX, height)
  lineX += 5;
  if (lineX > width) {
    lineX = 0;
  }
}
