// Color Changing Animation
// Demonstrates changing color over time using modulo
//
// This example animates color by cycling through RGB values.
// Each color component changes at a different rate, creating
// a rainbow-like color cycling effect.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Animate color by cycling through RGB values
  // Modulo (%) operator keeps values between 0-255 (valid RGB range)
  
  // Red component: cycles 0 → 255 → 0 → ...
  // frameCount % 256 keeps value between 0-255
  let redValue = frameCount % 256;
  
  // Green component: cycles twice as fast
  // Multiplying frameCount by 2 makes it cycle faster
  // When frameCount = 128, greenValue = 256 % 256 = 0 (wraps around)
  let greenValue = (frameCount * 2) % 256;
  
  // Blue component: cycles three times as fast
  // Multiplying by 3 makes it cycle even faster
  let blueValue = (frameCount * 3) % 256;
  
  // Apply animated color to shape
  fill(redValue, greenValue, blueValue);
  ellipse(200, 200, 100, 100);
  
  // HOW IT WORKS:
  // Each color component cycles at different speeds:
  // - Red: slowest (1x speed)
  // - Green: medium (2x speed)  
  // - Blue: fastest (3x speed)
  // This creates complex color combinations that cycle through the spectrum
  
  // EXPERIMENT:
  // - Try different multipliers: (frameCount * 1.5) for smoother transitions
  // - Use sin() for smoother color changes: map(sin(...), -1, 1, 0, 255)
  // - Try different speeds for each component to create unique color patterns

