// Basic Shapes Example
// Demonstrates basic drawing functions in p5.js
// 
// This example shows how to draw different shapes using p5.js drawing functions.
// Each shape function takes parameters that define its position and size.
// Shapes are drawn in the order they appear in the code (later shapes appear on top).

function setup() {
  // Initialize canvas to 400x400 pixels
  createCanvas(400, 400);
}

function draw() {
  // Set background to light gray (220 out of 255)
  // This clears the canvas each frame, preventing shapes from leaving trails
  background(220);
  
  // Draw a circle (ellipse with equal width and height)
  // Parameters: x position, y position, width, height
  // Position (200, 200) is the center of the canvas
  // Size 100x100 creates a circle with diameter 100
  ellipse(200, 200, 100, 100);
  
  // Draw a rectangle
  // Parameters: x position, y position, width, height
  // Position (150, 150) is top-left corner of rectangle
  // Size 100x100 creates a square
  // Note: This overlaps with the circle above
  rect(150, 150, 100, 100);
  
  // Draw a line
  // Parameters: x1, y1, x2, y2
  // Draws a line from point (0, 0) to point (400, 400)
  // This creates a diagonal line across the canvas
  line(0, 0, 400, 400);
  
  // Draw a triangle
  // Parameters: x1, y1, x2, y2, x3, y3
  // Defines three points that form the triangle's vertices
  // Points: (50, 50), (100, 100), (50, 100)
  triangle(50, 50, 100, 100, 50, 100);
  
  // Draw a point (single pixel)
  // Parameters: x position, y position
  // Draws a single pixel at position (300, 300)
  // May be hard to see - try making it larger with strokeWeight()
  point(300, 300);
}

