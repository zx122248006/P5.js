// filter() 会创建一个新的数组，用于过滤之前的一个数组

let vals = [1, 2, 3, 4, 5, 6, 7];


// 只有当这个数是偶数的时候，才会返回这个值。也就是偶数的筛选器
vals1 = vals.filter(function (x) {
  if (x % 2 == 0) {
    return x;
  }
})

// 使用箭头函数进一步简写
let vals2 = vals.filter(x => x % 2 == 0)

console.log(vals2)


let word = 'It was a dark and stormy night';
// 使用split 分隔字符串构建新的数组，然后使用filter过滤掉长度小于3的单词
let words = word.split(' ').filter(x => x.length >= 3)

console.log(words)
// 最后输出的结果是 ['dark','and','stromy','night']