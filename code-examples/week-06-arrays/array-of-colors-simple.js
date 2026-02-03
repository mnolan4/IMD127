let palette = ['red', 'blue', 'green', '#ffaa00', 'DodgerBlue', 'Tomato'];

function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  background(220);
  fill(random(palette));
  ellipse(random(width), random(height), 40, 40);
}
