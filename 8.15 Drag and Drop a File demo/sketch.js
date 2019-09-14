let dropzone;

function setup() {
  let canvas = createCanvas(200, 200);
  background(0);

//   dropzone = select('#dropzone')
  
//   dropzone.dragOver(light)
//   dropzone.dragLeave(unlight)
//   dropzone.drop(upFileP,unlight)
  
  canvas.drop(upFile)
  
  //使用drap()方法来进行拖动之后的方法触发，drop方法有一个必填方法，有一个选填方法，
  //dragOver() 和dragLeave() 分别是拖动进入以及拖动离开时的方法。
}

function upFile(file){
  let p = createP(file.name)
  let img = createImg(file.data)
  img.hide()
  //增加hide()方法，但同时又有 createP() 方法，所以图片拖拽到画布区域松开后，图片会在画布中铺满显示，如果没有 createP方法，则会需要拖拽两次才会显示
  // img.size(100,100)
  
  image(img,0,0,200,200)
}

// function upFileP(file){
//   let img = createImg(file.data)
//  img.size(100,100)
//   image(img,0,0,200,200)
// }

function light(){
  dropzone.style('background-color','#255')
}

function unlight(){
  dropzone.style('background-color','rgba(0,0,0,0)')
}

function draw() {}