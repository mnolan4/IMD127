function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  fill(255, 0, 0);
  ellipse(0, 0, 30, 30);
  
  fill(0, 255, 0);
  ellipse(width, 0, 30, 30);
  
  fill(0, 0, 255);
  ellipse(0, height, 30, 30);
  
  fill(255, 255, 0);
  ellipse(width, height, 30, 30);
  
  fill(255, 0, 255);
  ellipse(width/2, height/2, 50, 50);
  
  stroke(200);
  strokeWeight(1);
  
  for (let x = 0; x <= width; x += 50) {
    line(x, 0, x, height);
  }
  
  for (let y = 0; y <= height; y += 50) {
    line(0, y, width, y);
  }
}

