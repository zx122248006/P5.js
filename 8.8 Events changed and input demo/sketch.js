let textbox
let slider
let paragraph

function setup() {
  noCanvas()
  textbox = createInput('enter text')
  slider = createSlider(10, 64, 16)
  paragraph = createP('starting text')

  textbox.input(updateText);
  // input() 和 change() 的区别：
  // input() 只要input输入框 发生改变，就会触发
  // change() 则需要按回车或者光标离开input 之后才会触发

  slider.input(updateSize)
}


function updateText() {
  paragraph.html(textbox.value())
}

function updateSize() {
  paragraph.style('font-size', slider.value()+'px')
}