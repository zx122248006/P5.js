// let particle;

let particles = [];

function setup() {
  createCanvas(400, 400);

  // particle = new Particle(100,100)
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY))
}

function draw() {
  background(200);
  // particle.update();
  // particle.show();

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }

}