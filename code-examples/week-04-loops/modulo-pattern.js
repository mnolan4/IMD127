// Modulo Pattern
// Demonstrates using modulo operator for repeating patterns
//
// The modulo operator (%) returns the remainder after division.
// It's perfect for creating repeating patterns and cycles.
// This example alternates colors: red, blue, red, blue, ...

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Loop to draw 20 circles
  for (let i = 0; i < 20; i++) {
    
    // MODULO OPERATOR (%):
    // i % 2 returns the remainder when i is divided by 2
    // Examples:
    //   0 % 2 = 0 (0 divided by 2 = 0 remainder 0) → even
    //   1 % 2 = 1 (1 divided by 2 = 0 remainder 1) → odd
    //   2 % 2 = 0 (2 divided by 2 = 1 remainder 0) → even
    //   3 % 2 = 1 (3 divided by 2 = 1 remainder 1) → odd
    // Pattern: 0, 1, 0, 1, 0, 1, ... (alternates!)
    
    // Check if i is even (remainder is 0)
    if (i % 2 == 0) {
      fill(255, 0, 0);  // Red for even numbers (0, 2, 4, 6, ...)
    } else {
      fill(0, 0, 255);   // Blue for odd numbers (1, 3, 5, 7, ...)
    }
    
    // Draw circle at position based on i
    ellipse(i * 20 + 10, 200, 15, 15);
  }
  
  // RESULT: Alternating red and blue circles
  // Pattern: Red, Blue, Red, Blue, Red, Blue, ...
  
  // EXPERIMENT:
  // - Try i % 3 == 0 for three-color pattern
  // - Try i % 4 for four-color pattern
  // - Change colors: fill(i % 2 * 255, 100, 100)
  // - Try different modulo values for different cycle lengths

