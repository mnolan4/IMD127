// Mouse Following
// Demonstrates basic mouse interaction
//
// This example shows how to make shapes follow the mouse cursor.
// mouseX and mouseY are built-in p5.js variables that automatically
// track the current mouse position, updating every frame.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Clear background each frame
  background(220);
  
  // mouseX and mouseY are built-in p5.js variables
  // They automatically contain the current mouse position
  // mouseX = horizontal position (0 to width)
  // mouseY = vertical position (0 to height)
  // These update automatically every frame as you move the mouse
  
  // Draw circle at mouse position
  // The circle will follow your mouse cursor around the canvas
  ellipse(mouseX, mouseY, 50, 50);
  
  // KEY CONCEPT: mouseX and mouseY are always available
  // You don't need to do anything special - just use them!
  // They work anywhere in your code, updating automatically.
}

