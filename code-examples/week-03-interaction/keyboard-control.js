// Keyboard Control
// Demonstrates keyboard interaction for movement
//
// This example shows how to control object movement with keyboard keys.
// Use WASD keys (or arrow keys) to move a circle around the canvas.
// This pattern is common in games and interactive applications.

// Variables to store circle position
let x = 200;   // Starting x position (center horizontally)
let y = 200;   // Starting y position (center vertically)
let moveSpeed = 5; // How many pixels to move per key press

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Draw circle at current x, y position
  ellipse(x, y, 50, 50);
}

function keyPressed() {
  // keyPressed() is called automatically when any key is pressed
  // The 'key' variable contains which key was pressed
  
  // Check which key was pressed and move accordingly
  // Use || (OR operator) to check both lowercase and uppercase
  
  if (key === 'a' || key === 'A') {
    // 'A' key: move left (decrease x)
    x -= moveSpeed;  // Subtract moveSpeed from x (move left)
  } else if (key === 'd' || key === 'D') {
    // 'D' key: move right (increase x)
    x += moveSpeed;  // Add moveSpeed to x (move right)
  } else if (key === 'w' || key === 'W') {
    // 'W' key: move up (decrease y - remember y increases downward!)
    y -= moveSpeed;  // Subtract moveSpeed from y (move up)
  } else if (key === 's' || key === 'S') {
    // 'S' key: move down (increase y)
    y += moveSpeed;  // Add moveSpeed to y (move down)
  }
  
  // Keep circle on canvas using constrain()
  // constrain(value, min, max) keeps a value within a range
  // x: keep between 25 and width-25 (so circle doesn't go off edges)
  // y: keep between 25 and height-25
  // The 25 accounts for the circle's radius (50/2 = 25)
  x = constrain(x, 25, width - 25);
  y = constrain(y, 25, height - 25);
  
  // HOW IT WORKS:
  // 1. User presses key (e.g., 'W')
  // 2. keyPressed() is called automatically
  // 3. Code checks which key and updates x or y
  // 4. constrain() keeps position on canvas
  // 5. draw() redraws circle at new position
  
  // EXPERIMENT:
  // - Change moveSpeed value to move faster/slower
  // - Try arrow keys: keyCode === LEFT_ARROW (requires different check)
  // - Add diagonal movement: press 'w' and 'd' together (needs keyIsDown())
  // - Try different keys: 'j', 'k', 'l', 'i' for different layout
}
