let data;
function preload () {
  data = loadJSON('./birds.json')
}

function setup () {
  // createCanvas(400, 400);
  noCanvas()
  background(0);

  // let birds = data.birds;

  for (let i = 0; i < data.birds.length; i++) {
    // console.log(data.birds[i])
    createElement('h1',data.birds[i].family )
    // console.log(data.birds[i].members)

    let mem = data.birds[i].members;

    for(let j =0 ;j<mem.length;j++){
      console.log(data.birds[i].members[j])
      createElement('div',data.birds[i].members[j])
    }

  }
}

function draw () {

}


// let data;
// function preload(){
//   data = loadJSON('./birds.json')
// }

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(0);

//   let bird = data.birds[1].members[2]

//   createP(bird)
// }