// Noise Example
// Demonstrates using Perlin noise for smooth randomness
//
// Perlin noise creates smooth, organic randomness - perfect for natural-looking
// movement. Unlike random() which jumps around, noise() creates gradual,
// continuous changes. It's ideal for clouds, terrain, organic movement, etc.

// Noise offset variables
// These track our position in "noise space" (not screen space)
// Start at different values so x and y move independently
let xoff = 0;        // X offset in noise space
let yoff = 10000;    // Y offset (start far from xoff for independence)

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // NOISE FUNCTION:
  // noise(value) returns smooth random value between 0 and 1
  // Input value determines position in noise space
  // Similar input values → similar output values (smooth!)
  
  // Get noise value and scale to canvas size
  // noise(xoff) returns value 0-1, multiply by width to get 0-400
  let x = noise(xoff) * width;
  
  // Use different offset (yoff) for independent Y movement
  let y = noise(yoff) * height;
  
  // Increment offsets to move through noise space
  // Smaller increment = slower, smoother movement
  // Larger increment = faster, more erratic movement
  xoff += 0.01;  // Move slowly through noise space
  yoff += 0.01;
  
  // Draw circle at noise-determined position
  ellipse(x, y, 50, 50);
  
  // COMPARISON:
  // random(): 200 → 50 → 350 → 75 (jumps around)
  // noise():   200 → 205 → 210 → 208 (smooth transitions)
  
  // BENEFITS OF NOISE:
  // - Smooth, natural-looking movement
  // - Predictable in short term, unpredictable in long term
  // - Perfect for organic forms and animations
  // - Can create 2D/3D noise for complex patterns
  
  // EXPERIMENT:
  // - Change increment: 0.005 (slower) or 0.02 (faster)
  // - Try 2D noise: noise(xoff, yoff) for correlated movement
  // - Use for size: let circleSize = noise(xoff) * 100
  // - Combine with color: fill(noise(xoff) * 255, 100, 100)

