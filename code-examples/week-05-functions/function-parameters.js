// Function Parameters
// Demonstrates using parameters for variation
//
// Parameters let you pass values into functions, making them flexible.
// The same function can create different variations by changing the
// parameters you pass to it. This is powerful for creating reusable code.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Call the same function with different parameters
  // Each call creates a different flower with different:
  // - Position (x, y)
  // - Size
  // - Color
  
  // Flower 1: Red, size 50, at (100, 100)
  drawFlower(100, 100, 50, color(255, 0, 0));
  
  // Flower 2: Green, size 80, at (300, 200)
  drawFlower(300, 200, 80, color(0, 255, 0));
  
  // Flower 3: Blue, size 60, at (200, 300)
  drawFlower(200, 300, 60, color(0, 0, 255));
  
  // Same function, three different results!
}

// Function with MULTIPLE PARAMETERS
// Parameters are listed in parentheses, separated by commas
// Each parameter receives a value when the function is called
// Order matters: first value goes to first parameter, etc.

function drawFlower(x, y, diameter, col) {
  // x: horizontal position (first parameter)
  // y: vertical position (second parameter)
  // diameter: diameter of flower (third parameter)
  // col: color of flower (fourth parameter)

  // Use the color parameter
  fill(col);

  // Draw flower center using position and diameter parameters
  ellipse(x, y, diameter, diameter);

  // Add petals, etc. using the same parameters
  // All parts of the flower use x, y, diameter, col for consistency
}

// HOW PARAMETERS WORK:
// When you call: drawFlower(100, 100, 50, color(255, 0, 0))
// - x receives 100
// - y receives 100
// - diameter receives 50
// - col receives color(255, 0, 0)
// The function uses these values to draw the flower

// BENEFITS OF PARAMETERS:
// - One function, infinite variations
// - Easy to create many similar but different objects
// - Parameters make functions flexible and reusable
// - Can combine with loops to create patterns

