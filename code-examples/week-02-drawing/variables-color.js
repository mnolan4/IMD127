// Variables for Color
// Demonstrates using variables to store color values
//
// Storing color values in variables makes it easy to change colors throughout
// your code. You can create color variations by changing variable values,
// and later animate colors by changing these variables over time.

// Declare color component variables
// RGB colors are made of three components: Red, Green, Blue
// Each component ranges from 0-255
let redValue = 255;    // Red component: 255 = maximum red
let greenValue = 0;    // Green component: 0 = no green
let blueValue = 0;     // Blue component: 0 = no blue
// Together: (255, 0, 0) = pure red

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Use variables for color components
  // fill() takes RGB values, which we're providing from variables
  // This makes it easy to change the color by modifying the variables
  fill(redValue, greenValue, blueValue);
  ellipse(200, 200, 100, 100);
  
  // BENEFITS OF COLOR VARIABLES:
  // 1. Easy to experiment: Change values to try different colors
  // 2. Consistent colors: Use same variables for multiple shapes
  // 3. Animate colors: Change variables in draw() to create color animations
  // 4. Calculate colors: Use math to create color variations
  
  // Try changing redValue, greenValue, blueValue above
  // Examples:
  // - (0, 255, 0) = green
  // - (0, 0, 255) = blue
  // - (255, 255, 0) = yellow (red + green)
  // - (128, 128, 128) = gray (equal amounts of all colors)

