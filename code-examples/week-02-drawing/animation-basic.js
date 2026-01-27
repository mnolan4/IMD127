// Basic Animation
// Demonstrates simple animation using frameCount
//
// Animation is created by drawing something slightly different each frame.
// frameCount is a built-in p5.js variable that automatically increments
// each time draw() runs, giving us a way to change things over time.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Clear background each frame - without this, shapes would leave trails
  background(220);
  
  // frameCount is a built-in p5.js variable
  // It starts at 0 and increases by 1 every time draw() runs
  // Since draw() runs 60 times per second, frameCount increases by 60 per second
  
  // Modulo operator (%) returns the remainder after division
  // frameCount % width keeps x between 0 and width-1
  // When frameCount reaches width (400), it wraps back to 0
  // This creates a looping animation that moves across the screen
  let x = frameCount % width;
  
  // Draw circle at x position (which changes each frame)
  // y stays constant at 200, creating horizontal movement
  ellipse(x, 200, 50, 50);
  
  // HOW IT WORKS:
  // Frame 0: x = 0 % 400 = 0, circle at left
  // Frame 1: x = 1 % 400 = 1, circle moves right
  // Frame 400: x = 400 % 400 = 0, circle wraps back to left
  // This creates smooth, continuous movement across the screen
}

