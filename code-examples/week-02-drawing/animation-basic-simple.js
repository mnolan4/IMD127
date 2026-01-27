function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let x = frameCount % width;
  ellipse(x, 200, 50, 50);
}

