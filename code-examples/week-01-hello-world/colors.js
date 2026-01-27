// Colors Example
// Demonstrates using colors in p5.js
//
// This example shows how to use fill() and stroke() to add color to shapes.
// Colors in p5.js use RGB (Red, Green, Blue) values from 0-255.
// fill() colors the inside of shapes, stroke() colors the outline.

function setup() {
  // Initialize canvas
  createCanvas(400, 400);
}

function draw() {
  // Background color - grayscale value (0-255)
  // 0 = black, 255 = white, 100 = dark gray
  // This sets the background to dark gray
  background(100);
  
  // Fill color - RGB (Red, Green, Blue)
  // Each color component ranges from 0-255
  // fill() sets the color for all shapes drawn after it
  // (255, 0, 0) = maximum red, no green, no blue = RED
  fill(255, 0, 0);  // Red
  ellipse(100, 200, 80, 80);
  
  // Change fill color - this affects all subsequent shapes
  // (0, 255, 0) = no red, maximum green, no blue = GREEN
  fill(0, 255, 0);  // Green
  ellipse(200, 200, 80, 80);
  
  // (0, 0, 255) = no red, no green, maximum blue = BLUE
  fill(0, 0, 255);  // Blue
  ellipse(300, 200, 80, 80);
  
  // Stroke color (outline) - colors the border of shapes
  // stroke() sets the outline color for all shapes drawn after it
  // (255, 255, 0) = red + green = YELLOW
  stroke(255, 255, 0);  // Yellow outline
  
  // strokeWeight() sets the thickness of the outline in pixels
  strokeWeight(5);      // 5 pixel thick outline
  
  // Fill color for the rectangle
  // (255, 0, 255) = red + blue = MAGENTA
  fill(255, 0, 255);    // Magenta fill
  rect(150, 100, 100, 100);
  
  // Remove fill - makes shapes transparent (only outline visible)
  noFill();
  
  // Set stroke to black with thin weight
  stroke(0);            // Black outline
  strokeWeight(2);      // 2 pixel thick outline
  
  // This ellipse will only show its outline (no fill)
  ellipse(200, 200, 150, 150);
}

