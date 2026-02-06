// While Loops (Grid)
// Demonstrates nested while loops for a 2D grid of circles
//
// A while loop repeats while a condition is true. You set the initial value
// before the loop and update it inside the loop. Nested while loops can
// create grids, just like nested for loops.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Red BG
  background(255, 0, 0);
  // Set fill color to white, with alpha (transparency) 175/255
  fill(255, 255, 255, 175);
  // Set the outline of the shape to black
  stroke(0);
  // Initial position of the circle 10, 10. Repeat until y position is greater than 400.
  let ypos = 10;
  // Envision each "while" loop as a gatekeeper: so long as the condition is true, we continue.
  while (ypos < 400) {
    let xpos = 10;
    // So long as x position is less than 400, draw a 25px radius circle at current xy, then add 20 to x.
    while (xpos < 400) {
      circle(xpos, ypos, 25);
      xpos = xpos + 20;
    }
    // Also add 20 to the y position value
    ypos = ypos + 20;
  }
}
