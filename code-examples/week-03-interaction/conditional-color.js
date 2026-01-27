// Conditional Color
// Demonstrates using conditionals (if/else) to change behavior
//
// Conditionals let your code make decisions based on conditions.
// This example changes the circle color based on where the mouse is.
// If mouse is on left half of canvas → red, right half → blue.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // CONDITIONAL STATEMENTS (if/else)
  // These let code make decisions based on conditions
  
  // Check if mouse is on left side of canvas
  // mouseX < width/2 means: is mouse X position less than half the width?
  // width/2 = 200 (half of 400), so this checks if mouseX < 200
  if (mouseX < width/2) {
    // This code runs ONLY if the condition is true (mouse on left)
    fill(255, 0, 0);  // Red color
  } else {
    // This code runs if the condition is false (mouse on right)
    fill(0, 0, 255);  // Blue color
  }
  
  // Draw circle (color was set by the conditional above)
  ellipse(200, 200, 100, 100);
  
  // Display mouse position as text (for debugging/learning)
  fill(0);  // Black text
  text("Mouse X: " + mouseX, 10, 20);  // Show X position
  text("Mouse Y: " + mouseY, 10, 40);  // Show Y position
  
  // HOW IT WORKS:
  // - Move mouse left → mouseX < 200 → circle turns red
  // - Move mouse right → mouseX >= 200 → circle turns blue
  // - The circle stays in center, but color changes based on mouse
  
  // EXPERIMENT:
  // - Try: if (mouseY < height/2) for top/bottom instead of left/right
  // - Add more conditions: if/else if/else for multiple colors
  // - Try: if (mouseX < width/3) for three sections

