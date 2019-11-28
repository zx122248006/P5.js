let counter1;
function setup () {

  noCanvas()

  counter1 = new Counter(100, 500);
  // createCanvas(400, 400);

  // let button = createButton('press')


  // button.mousePressed(changeBackground)

  // function changeBackground () {
  //   background(random(255))
  // }



  // button.mousePressed(function () {
  //   background(random(255))
  // })

  // button.mousePressed(() => { background(random(255)) })

  // button.mousePressed(() => background(random(255)))
}

function draw () {
  // background(220);
  // counter1.countIt();
}

class Counter {
  constructor(start, wait) {
    this.count = start;
    this.p = createP('')

    setInterval(() => {
      this.count++;
      this.p.html(this.count)
    }, wait)

  }



}



