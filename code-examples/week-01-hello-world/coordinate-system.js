// Coordinate System Example
// Demonstrates how the coordinate system works in p5.js
//
// Understanding coordinates is essential for positioning shapes.
// In p5.js, the coordinate system is different from traditional math:
// - Origin (0, 0) is at the TOP-LEFT corner
// - X increases as you move RIGHT
// - Y increases as you move DOWN (opposite of math class!)

function setup() {
  // Create 400x400 pixel canvas
  createCanvas(400, 400);
}

function draw() {
  // White background
  background(255);
  
  // KEY CONCEPT: Coordinate system in p5.js
  // Origin (0, 0) is at top-left corner
  // X increases going right (0 to width)
  // Y increases going down (0 to height)
  // This is opposite of traditional math where Y increases upward!
  
  // Draw circles at each corner to visualize the coordinate system
  
  // Top-left corner: (0, 0)
  fill(255, 0, 0);  // Red
  ellipse(0, 0, 30, 30);
  
  // Top-right corner: (width, 0)
  // width is a built-in variable that holds the canvas width (400)
  fill(0, 255, 0);  // Green
  ellipse(width, 0, 30, 30);
  
  // Bottom-left corner: (0, height)
  // height is a built-in variable that holds the canvas height (400)
  fill(0, 0, 255);  // Blue
  ellipse(0, height, 30, 30);
  
  // Bottom-right corner: (width, height)
  fill(255, 255, 0);  // Yellow
  ellipse(width, height, 30, 30);
  
  // Center of canvas: (width/2, height/2)
  // Dividing by 2 finds the middle point
  fill(255, 0, 255);  // Magenta
  ellipse(width/2, height/2, 50, 50);
  
  // Draw grid to visualize coordinates
  // This helps see how the coordinate system works
  stroke(200);        // Light gray lines
  strokeWeight(1);    // Thin lines
  
  // Vertical lines every 50 pixels
  // Loop creates lines from x=0 to x=400, spaced 50 pixels apart
  for (let x = 0; x <= width; x += 50) {
    line(x, 0, x, height);  // Vertical line from top to bottom
  }
  
  // Horizontal lines every 50 pixels
  // Loop creates lines from y=0 to y=400, spaced 50 pixels apart
  for (let y = 0; y <= height; y += 50) {
    line(0, y, width, y);  // Horizontal line from left to right
  }
}

