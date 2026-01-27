// Mouse Pressed
// Demonstrates mouse click events
//
// This example shows how to respond to mouse clicks.
// mousePressed() is a special function that p5.js calls automatically
// when the mouse button is pressed down.

function setup() {
  createCanvas(400, 400);
  // Set background once in setup (not in draw)
  // This means shapes won't be cleared each frame - they'll accumulate
  background(220);
}

function draw() {
  // Draw function can be empty when using event functions
  // Or use it for continuous animation while also responding to clicks
  // In this case, we only want things to happen on click, so it's empty
}

function mousePressed() {
  // mousePressed() is called AUTOMATICALLY by p5.js when mouse button is pressed
  // You don't call it yourself - p5.js handles the mouse event and calls it
  
  // random() generates a random number
  // random(255) returns a number between 0 and 255
  // We use it three times to get random RGB values
  fill(random(255), random(255), random(255));
  
  // Draw circle at mouse position when clicked
  // mouseX and mouseY are available here too - they contain click position
  ellipse(mouseX, mouseY, 50, 50);
  
  // Each click creates a new circle with a random color
  // Since we don't clear background in draw(), circles accumulate on screen
}

