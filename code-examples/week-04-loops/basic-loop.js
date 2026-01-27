// Basic Loop
// Demonstrates using for loops to repeat code
//
// Loops let you repeat code multiple times without writing it over and over.
// This example uses a for loop to draw 10 circles in a row.
// Instead of writing ellipse() 10 times, we write it once inside a loop.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // FOR LOOP SYNTAX:
  // for (let i = 0; i < 10; i++) { ... }
  //   - let i = 0: Start with i = 0 (initialization)
  //   - i < 10: Keep looping while i is less than 10 (condition)
  //   - i++: Add 1 to i after each iteration (increment)
  //   - Loop runs 10 times: i = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  
  for (let i = 0; i < 10; i++) {
    // This code runs 10 times, once for each value of i
    
    // Calculate x position based on loop variable i
    // i * 40 + 20 creates spacing:
    //   i=0: 0*40+20 = 20 (first circle)
    //   i=1: 1*40+20 = 60 (second circle, 40 pixels to the right)
    //   i=2: 2*40+20 = 100 (third circle, another 40 pixels right)
    //   ... and so on
    ellipse(i * 40 + 20, 200, 30, 30);
  }
  
  // BENEFITS OF LOOPS:
  // - Write code once, execute many times
  // - Easy to change count (change 10 to 20 for 20 circles)
  // - Can use loop variable (i) for calculations
  // - Makes patterns and repetitions easy
}

