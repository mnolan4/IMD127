// Random Basic
// Demonstrates using random() function
//
// random() generates random numbers, adding unpredictability and variation
// to your code. Each time random() is called, it returns a different value,
// creating varied, organic-looking results.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // RANDOM() FUNCTION:
  // random(max) returns number between 0 and max
  // random(min, max) returns number between min and max
  
  // Random position anywhere on canvas
  // random(width) returns value between 0 and canvas width (400)
  let x = random(width);
  
  // random(height) returns value between 0 and canvas height (400)
  let y = random(height);
  
  // Random size between 10 and 100 pixels
  // random(10, 100) returns value between 10 and 100
  let circleSize = random(10, 100);

  // Draw circle with random position and size
  // Each frame, circle appears at different random location with random size
  ellipse(x, y, circleSize, circleSize);
  
  // NOTE: Since this is in draw(), it runs 60 times per second!
  // Each frame gets new random values, creating rapid flickering
  // To see individual circles, try calling this in mousePressed() instead
  
  // EXPERIMENT:
  // - Move to mousePressed() to draw one circle per click
  // - Use random() for colors: fill(random(255), random(255), random(255))
  // - Constrain size: size = constrain(random(10, 200), 10, 100)
  // - Try different ranges: random(50, 150) for medium sizes

