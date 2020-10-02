

var appkey = '48041'

var sign = 'd2888fc3c5505c581852b66bef7fe262'

var url = 'http://api.k780.com/?app=finance.rate&scur=USD&tcur=CNY&appkey=' + appkey + '&sign=' + sign;

// 定义初始汇率
var rate = 0;

function setup () {

  var km = milesToKm(26.3)
  print(km)
  var km2 = milesToKm(100)
  // print(km2)

  // 载入json
  loadJSON(url, gotoData)
}

// 将数据赋值给变量
function gotoData (data) {
  rate = data.result.rate
}


// 人民币转美元汇率
function rToU (doller) {
  var result = doller * rate;
  // 使用return将数据返回
  return result;
}

// 学习时，用于处理return
function milesToKm (miles) {
  var km = miles * 1.6;
  console.log(km)
  return km;
}




function draw () {
  background(0);

  // 调用人民币转换美元的函数
  var es = rToU(20)
  // 输出
  print(es)
}





