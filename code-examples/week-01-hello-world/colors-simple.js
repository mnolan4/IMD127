function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  
  fill(255, 0, 0);
  ellipse(100, 200, 80, 80);
  
  fill(0, 255, 0);
  ellipse(200, 200, 80, 80);
  
  fill(0, 0, 255);
  ellipse(300, 200, 80, 80);
  
  stroke(255, 255, 0);
  strokeWeight(5);
  fill(255, 0, 255);
  rect(150, 100, 100, 100);
  
  noFill();
  stroke(0);
  strokeWeight(2);
  ellipse(200, 200, 150, 150);
}

