// Basic Math
// Demonstrates basic arithmetic in JavaScript and printing results with console.log
//
// JavaScript supports addition (+), subtraction (-), multiplication (*),
// division (/), and remainder/modulo (%). Order of operations follows standard math.
// console.log() can take multiple arguments separated by commas.

function setup() {
  // ----- BASIC MATH EXAMPLES -----
  // Each formula is displayed as text, then the results are displayed.
  // console.log() can take multiple arguments separated by commas

  createCanvas(400, 400);

  // Addition
  console.log("5 + 3 =", 5 + 3);

  // Subtraction
  console.log("10 - 4 =", 10 - 4);

  // Multiplication
  console.log("6 * 2 =", 6 * 2);

  // Division
  console.log("20 / 5 =", 20 / 5);

  // Remainder (modulo)
  console.log("10 % 3 =", 10 % 3);

  // Order of operations
  console.log("2 + 3 * 4 =", 2 + 3 * 4);
  console.log("(2 + 3) * 4 =", (2 + 3) * 4);

  // Complete message
  console.log("Operations Complete!");
}

function draw() {
  // Nothing happens here.
  // All the math results were printed once in setup().
}
