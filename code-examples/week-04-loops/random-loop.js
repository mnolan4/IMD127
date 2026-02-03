// Random Loop
// Demonstrates combining a loop with random() to draw many shapes at random positions and sizes
//
// p5's random() returns a random number. random(max) returns 0 up to (but not including) max;
// random(min, max) returns a value between min and max (max not included).
// Use a loop to draw many shapes—each with random position, size, or color—to create variation.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Loop: draw 50 circles, each at a random position and size
  for (let i = 0; i < 50; i++) {
    // Random color (RGB 0-255)
    fill(random(255), random(255), random(255));
    // Random position: random(width) is 0 to width, random(height) is 0 to height
    // Random size: random(10, 50) gives width/height between 10 and 50
    ellipse(random(width), random(height), random(10, 50), random(10, 50));
  }
}
