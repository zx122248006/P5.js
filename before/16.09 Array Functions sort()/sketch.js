let word = 'It was a dark and stormy night';
let words = word.split(' ').filter(x => x.length >= 3)

// sort()用于数组的排序
words.sort((a, b) => b.length - a.length)

console.log(words)