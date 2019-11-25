var socket;

function setup () {
  createCanvas(400, 400);
  background(51);

  socket = io.connect('http://localhost:3000');

  // 获取传递而来的数据
  socket.on('mouse', newDrawing);
}

function newDrawing (data) {
  noStroke();
  fill(255, 0, 100)
  ellipse(data.x, data.y, 36)
}

function mouseDragged () {
  console.log('Sending: ' + mouseX + ',' + mouseY)

  var data = {
    x: mouseX,
    y: mouseY
  }

  // 将数据传输到server中
  socket.emit('mouse', data)


  noStroke();
  fill(255)
  ellipse(mouseX, mouseY, 36)
}


function draw () {

}