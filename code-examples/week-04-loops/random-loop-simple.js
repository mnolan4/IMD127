function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let i = 0; i < 50; i++) {
    fill(random(255), random(255), random(255));
    ellipse(random(width), random(height), random(10, 50), random(10, 50));
  }
}
