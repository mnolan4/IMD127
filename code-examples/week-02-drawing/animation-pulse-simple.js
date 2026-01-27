function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let pulseSize = map(sin(frameCount * 0.1), -1, 1, 20, 100);
  ellipse(200, 200, pulseSize, pulseSize);
}

