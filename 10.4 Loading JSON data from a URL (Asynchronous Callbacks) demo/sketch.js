// function preload(){
//   data =loadJSON('./birds.json')
// }
let x =0;

function setup () {
  createCanvas(400, 400);
  loadJSON('http://api.open-notify.org/astros.json', gotData, 'jsonp')
}
function gotData (data) {
  console.log(data)

}

function draw () {
  background(0);
  for (let i = 0; i < data.number; i++) {
    fill(255)
    ellipse(random(width), random(height), 16, 16)
  }
}