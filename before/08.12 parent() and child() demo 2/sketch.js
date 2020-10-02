let happy = ['rainbow','unicorn','purple','bacteria']
function setup() {
  noCanvas()
  
  let button = select('#button')
  button.mousePressed(addItem)
}

function addItem (){
  let r = floor(random(0,happy.length))
  // createP(happy[r])
  let li = createElement('li',happy[r])
  let ol = selectAll('ol')[0]
  li.parent(ol)
}



