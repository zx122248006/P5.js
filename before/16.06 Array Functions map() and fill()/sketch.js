let vals = [2, 4, 8, 16, 32];

console.log(vals);

function doubler (x) {
  return x * 2
}

let vals1 = vals.map(doubler);

console.log(vals1);

// map()可以方便的使一个数组中的每一个对象执行一个方法,并且返回值仍然是数组

// 以下是不使用map()的示例 可能需要重新使用一个新的空数组来承接次数据

let vals2 = [3, 6, 9, 18, 36];
let arr = [];
console.log(vals2);

for (const v of vals2) {
  arr.push(doubler(v))
}

console.log(arr)

// 第一个示例可以使用箭头函数简化

let vals3 = vals.map(x => x * 2)
console.log(vals3)



let vals4 = [4, 8, 1, 2, 9];
let vals5 = vals4.fill(0);

console.log(vals5)


// fill()用一个值填充一个数组
// 以下就是先使用fill(0),填充了一个100位的数组，然后使用map()方法，将数组里面的值，取一个小于100的随机整数
// 如果不是取整数可以使用Math.random() 即可，不用使用箭头函数
let arr1 = new Array(100)
console.log(arr1)

arr1 = arr1.fill(0).map(() => Math.round(Math.random() * 100));
console.table(arr1)