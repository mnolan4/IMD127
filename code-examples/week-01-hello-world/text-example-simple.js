function setup() {
  createCanvas(400, 400);
	
  background(220);

  textAlign(LEFT);
  text("Hello World", 20, 50);
  
  textSize(32);
  text("Creative", 150, 100);
  
  fill(255, 0, 0);
  textSize(24);
  text("Coding", 150, 150);
  
  textAlign(CENTER);
  fill(0, 0, 255);
  textSize(40);
  text("Center Blue Text", width/2, 250);
  
  textAlign(RIGHT);
  fill(0, 255, 0);
  textSize(20);
  text("Right Aligned Green Text", width - 20, 300);
  
  textAlign(CENTER);
  fill(255);
  stroke(0);
  strokeWeight(4);
  textSize(36);
  text("Outlined White Text", width/2, 350);
}
