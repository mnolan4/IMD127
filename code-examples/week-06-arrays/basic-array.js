// Basic Array
// Demonstrates creating and using arrays
//
// Arrays let you store multiple values in a single variable.
// Instead of having x1, x2, x3, x4, you can have one array with all values.
// Arrays are perfect for managing collections of related data.

// ARRAY SYNTAX: [value1, value2, value3, ...]
// Square brackets [] create an array
// Values separated by commas
// xPositions is an array containing 4 numbers
let xPositions = [100, 200, 300, 400];
// Index:         [0]  [1]  [2]  [3]
// Arrays are indexed starting at 0, not 1!

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Loop through array to access each value
  // xPositions.length gives the number of elements (4 in this case)
  // i goes from 0 to 3 (array indices)
  for (let i = 0; i < xPositions.length; i++) {
    // Access array element using square brackets: arrayName[index]
    // xPositions[i] gets the value at position i
    // i=0: xPositions[0] = 100
    // i=1: xPositions[1] = 200
    // i=2: xPositions[2] = 300
    // i=3: xPositions[3] = 400
    ellipse(xPositions[i], 200, 50, 50);
  }
  
  // BENEFITS OF ARRAYS:
  // - Store multiple related values together
  // - Easy to loop through all values
  // - Can add/remove values dynamically
  // - Perfect for managing many objects
}

