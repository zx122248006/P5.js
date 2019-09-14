let paragraph
let paragraphP


function setup () {
  createCanvas(100, 100);
  background(0)

  //   createP('this is a random number ' + random(10))

  // paragraph = select('#unicorn')
  // paragraph.mouseOver(changeBackground)

  let button = select('#button')
  button.mousePressed(canvasBg)

  paragraphP = selectAll('.rainbow')

  for (let i = 0; i < paragraphP.length; i++) {

    paragraphP[i].style('background-color', 'pink')
  }

}

function canvasBg () {
  background(random(255))
}

function changeBackground () {
  paragraphP.style('background-color', 'pink')
}