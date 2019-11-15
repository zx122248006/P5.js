
var express = require('express');

var app = express();

var server = app.listen(3000);

app.use(express.static('public'));

console.log('服务器开始运行');

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection (socket) {
  console.log(socket.id)

  // 获取传输过来的数据然后再调用 mouseMsg 方法
  socket.on('mouse', mouseMsg);

  function mouseMsg (data) {
    // 将获取的数据传输出去
    socket.broadcast.emit('mouse',data)
    console.log(data)
  }


}