// let song1;
// let song2;
let songs = []
let totalSong = 5
let angle = 0;
let counter = 0;

let loading = true;

// preload()用于setup()之前的加载，需要执行完preload之后才执行setup()
function preload () {
  // song1 = loadSound('./songs/rainbow0.mp3')
}


// function soundLoaded (song) {
//   // 此处传参进入的song 就是在setup()中 loadSound 中获取的 './songs/rainbow0.mp3',将该地址作为参数传入 这个函数中
//   song1 = song;
//   song1.play()
//   loading = false
// }


// function rainbowSong(index,filename){
function rainbowSong (filename) {
  loadSound(filename, soundLoaded)

  function soundLoaded (sound) {
    // console.log(index+ ''+filename)
    console.log(filename)
    songs.push(sound)
    // song[index] = sound;
    // song[index].play()

    counter++
    if (counter == totalSong) {
      loading = false
    }
  }
}

function setup () {
  createCanvas(300, 300);
  console.log(floor(millis()) + 'milliseconds')

  for (let i = 0; i < totalSong; i++) {
    rainbowSong('./songs/rainbow' + i + '.mp3');
  }

  // rainbowSong(0,'./songs/rainbow0.mp3');
  // rainbowSong(1,'./songs/rainbow1.mp3');

  // song1 = loadSound('./songs/rainbow0.mp3',soundLoaded)
  // song1 = loadSound('./songs/rainbow1.mp3',soundLoaded)
}

function draw () {
  background(51);

  if (loading) {

    stroke(255)
    noFill()
    rect(10, 10, 200, 20)

    noStroke();
    fill(255, 100)
    let w = 200 * counter / totalSong
    rect(10, 10, w, 20)

    translate(width / 2, height / 2)
    rotate(angle)
    strokeWeight(4)
    stroke(255)
    line(0, 0, 100, 0)
    angle += 0.1
  } else {
    background(0, 255, 0)
  }

}

// 整个loading animation 的实现 原理是：
// 1. 在setup() 中 使用for 循环 加载所有的 音频文件。并且调用自定义函数 rainbowSong() 
// 2. function rainbowSong (filename) {
//     loadSound(filename, soundLoaded)
//     function soundLoaded (sound) {
//       // console.log(index+ ''+filename)
//       console.log(filename)
//       songs.push(sound)
//       counter++
//       if (counter == totalSong) {
//         loading = false
//       }
//     }
//   }
// 注：将 setup 中调用的 音频文件 push 到数组中，当数组的长度 和所有 音频文件数量长度相同时，则改变 loading 的值

// 3. 判断loading是否为 false 如果为false则在 draw() 进行反应