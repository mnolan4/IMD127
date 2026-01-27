// Nested Loops
// Demonstrates loops inside loops for grid patterns
//
// Nested loops are loops inside other loops. They're perfect for creating
// two-dimensional patterns like grids. The outer loop handles rows,
// the inner loop handles columns.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // OUTER LOOP: handles columns (x direction)
  // Runs 10 times: x = 0, 1, 2, ..., 9
  for (let x = 0; x < 10; x++) {
    
    // INNER LOOP: handles rows (y direction)
    // For EACH value of x, this runs 10 times: y = 0, 1, 2, ..., 9
    // Total: 10 x 10 = 100 circles drawn!
    for (let y = 0; y < 10; y++) {
      
      // Calculate position using both x and y
      // x * 40 + 20: horizontal spacing (columns)
      // y * 40 + 20: vertical spacing (rows)
      // Creates a 10x10 grid of circles
      ellipse(x * 40 + 20, y * 40 + 20, 30, 30);
    }
  }
  
  // HOW IT WORKS:
  // x=0: Draw row at y=0,1,2...9 (10 circles in first column)
  // x=1: Draw row at y=0,1,2...9 (10 circles in second column)
  // ... continues for all 10 columns
  // Result: 10x10 grid = 100 circles
  
  // EXPERIMENT:
  // - Change 10 to different numbers for different grid sizes
  // - Change spacing: try x * 50 or x * 30
  // - Add color variation: fill(x * 25, y * 25, 100)
  // - Try different shapes: rect() instead of ellipse()

