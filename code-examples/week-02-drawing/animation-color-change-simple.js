function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let redValue = frameCount % 256;
  let greenValue = (frameCount * 2) % 256;
  let blueValue = (frameCount * 3) % 256;
  fill(redValue, greenValue, blueValue);
  ellipse(200, 200, 100, 100);
}

