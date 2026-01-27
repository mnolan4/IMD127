// Custom Function
// Demonstrates creating and using custom functions
//
// Functions let you organize code into reusable blocks.
// Instead of repeating the same code, you write it once in a function
// and call that function whenever you need it. This makes code cleaner
// and easier to maintain.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Call custom function multiple times with different positions
  // Each call draws a star at the specified x, y position
  // This is much cleaner than writing the star-drawing code three times!
  drawStar(100, 100);  // Star at position (100, 100)
  drawStar(300, 200);  // Star at position (300, 200)
  drawStar(200, 300);  // Star at position (200, 300)
}

// CUSTOM FUNCTION DEFINITION
// function functionName(parameters) { ... }
// - functionName: name you choose (drawStar)
// - parameters: values passed in (x, y positions)
// - Code inside { } runs when function is called

function drawStar(x, y) {
  // This function draws a star at the given x, y position
  // x and y are parameters - they receive values when function is called
  
  fill(255, 255, 0);  // Yellow color
  ellipse(x, y, 30, 30);  // Draw circle at x, y position
  
  // Add more star details here (points, sparkles, etc.)
  // All code here runs each time drawStar() is called
}

// BENEFITS OF FUNCTIONS:
// 1. Reusability: Write once, use many times
// 2. Organization: Group related code together
// 3. Readability: drawStar() is clearer than repeated code
// 4. Maintainability: Change function once, affects all uses
// 5. Modularity: Build complex programs from simple functions

