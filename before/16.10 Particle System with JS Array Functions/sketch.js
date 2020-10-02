// let Particles = [];

let Particles;
function setup () {
  createCanvas(600, 400);
  Particles = Array(100).fill(null).map(
    p => new Particle()
  )
}

function draw () {
  background(0);

  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    Particles.push(p)
  }

  Particles.forEach(element => {
    element.show();
    element.update();
  });


  // for (const particle of Particles) {
  //   particle.update();
  //   particle.show()
  // }

  Particles = Particles.filter(p => !p.finished())

  // for (let i = Particles.length - 1;
  //   i >= 0; i--) {
  //   Particles[i].show();
  //   Particles[i].update();
  //   if (Particles[i].finished()) {
  //     Particles.splice(i, 1)
  //   }
  // }

}


class Particle {

  constructor() {

    this.x = mouseX;
    this.y = mouseY;
    // this.x = 300;
    // this.y = 380;
    this.vx = random(-1, 1);
    this.vy = random(-5, 5)
    this.alpha = 255;
  }


  finished () {
    return this.alpha < 0;
  }
  update () {
    this.x += this.vx;
    this.y += this.vy
    this.alpha -= 1;
  }

  show () {
    noStroke()
    // stroke(255)
    fill(255, this.alpha)
    ellipse(this.x, this.y, 16)
  }

}