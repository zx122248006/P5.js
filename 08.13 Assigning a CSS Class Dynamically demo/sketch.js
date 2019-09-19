function setup() {
  for (let i = 0; i < 10; i++) {
    let p = createA('javascript:void(0)', 'apples');
    let x = floor(random(windowWidth))
    let y = floor(random(windowHeight))
    p.position(x, y)
    //可以使用.class 增加类名
    p.class('apple')
  }

  for (let i = 0; i < 10; i++) {
    let p = createA('javascript:void(0)', 'blueberries');
    let x = floor(random(windowWidth))
    let y = floor(random(windowHeight))
    p.position(x, y)
    p.class('blueberries')
    p.mousePressed(changeClass)
  }
}

function changeClass() {
  this.class('apple')
  //也可以使用removeClass 删除类名
  this.removeClass('blueberries')
}

// function draw() {
//   background(220);
// }