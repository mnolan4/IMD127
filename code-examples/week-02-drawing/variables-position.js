// Variables for Position
// Demonstrates using variables to store position values
//
// Variables let you store values that can be used multiple times and changed easily.
// Instead of hard-coding numbers like ellipse(200, 200, 50, 50), you can use
// variables like ellipse(x, y, 50, 50). This makes code more flexible and readable.

// Declare variables at the top level (outside functions)
// This makes them accessible in both setup() and draw()
// 'let' keyword declares a variable
// Variables store values that can change
let x = 200;  // x position - stores the horizontal position
let y = 200;  // y position - stores the vertical position

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Use variables for position instead of hard-coded numbers
  // This makes it easy to change the position by changing the variable values
  // Variables make code more readable and maintainable
  ellipse(x, y, 50, 50);
  
  // BENEFITS OF USING VARIABLES:
  // 1. Easy to change: Just change x or y at the top, affects entire sketch
  // 2. More readable: ellipse(x, y, 50, 50) is clearer than ellipse(200, 200, 50, 50)
  // 3. Reusable: Can use x and y multiple times without repeating numbers
  // 4. Changeable: Can modify x and y in draw() to create animation
  
  // Try changing x and y values above to see the circle move
  // Later, you'll learn to change x and y in draw() to create animation!
}

