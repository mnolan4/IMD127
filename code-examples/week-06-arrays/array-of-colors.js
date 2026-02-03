// Array of Colors
// Demonstrates storing color names or hex in an array and using random(array) to pick a color
//
// Arrays can hold any type of value—not just numbers. Strings work too: color names
// (e.g. 'red', 'DodgerBlue') or hex strings (e.g. '#ff6b6b'). p5's random() accepts
// an array and returns one random element—so random(palette) gives you a random color.
// Generative artists often use this pattern: curate a small palette and let the
// program choose from it, so results stay coherent while still varied.

// Palette: array of color names and hex strings
// p5.js recognizes CSS color names and hex codes
let palette = ['red', 'blue', 'green', '#ffaa00', 'DodgerBlue', 'Tomato'];

function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  background(220);

  // random(palette) returns one random element from the array
  // Use it with fill() to pick a random color from your palette each time
  fill(random(palette));
  ellipse(random(width), random(height), 40, 40);
}
