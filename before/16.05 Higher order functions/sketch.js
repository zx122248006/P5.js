function sing (callback) {
  console.log('1  1  1')
  if (callback) {
    callback()
  }
}


function ow () {
  console.log('1')
}
// 传参可以将函数名进行传参，用于调用其他函数
// 但是函数需要存在
function setup () {
  sing() 
  sing(ow)
}