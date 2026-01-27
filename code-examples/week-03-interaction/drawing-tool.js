// Simple Drawing Tool
// Demonstrates leaving a trail by not clearing background
//
// This example creates a simple drawing tool where moving the mouse
// leaves a trail. The key is NOT calling background() in draw(),
// which allows shapes to accumulate and create a drawing.

function setup() {
  createCanvas(400, 400);
  // Set background once in setup
  // This gives us a clean canvas to start with
  background(220);
}

function draw() {
  // KEY: Don't call background() here!
  // If we called background(220) here, it would clear the canvas
  // every frame, erasing our drawing trail
  
  // Draw small circle at mouse position
  // This happens every frame (60 times per second)
  // As mouse moves, circles are drawn along the path
  fill(0);        // Black fill
  noStroke();    // No outline
  ellipse(mouseX, mouseY, 10, 10);  // Small circle (10 pixel diameter)
  
  // Since background isn't cleared, each circle stays on screen
  // This creates a continuous trail as you move the mouse
}

function mousePressed() {
  // Clear canvas when mouse is clicked
  // This gives you a way to start over
  background(220);
  
  // EXPERIMENT:
  // - Try calling background() in draw() - see how it erases the trail
  // - Change circle size or color
  // - Add random colors: fill(random(255), random(255), random(255))
  // - Try different shapes: rect(), triangle(), etc.
}

