// Random Walk
// Demonstrates creating organic paths with random movement
//
// A random walk moves randomly step by step, creating organic, unpredictable
// paths. Each frame, the position changes by a small random amount, building
// up a trail over time. This creates natural-looking, meandering paths.

// Starting position (center of canvas)
let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
  // Set background once (not in draw)
  // This allows the trail to accumulate, creating a path
  background(220);
}

function draw() {
  // RANDOM WALK ALGORITHM:
  // Each frame, add a small random amount to current position
  // This creates step-by-step random movement
  
  // Move x position randomly
  // random(-5, 5) returns value between -5 and +5
  // Could move left (negative) or right (positive)
  x += random(-5, 5);
  
  // Move y position randomly
  // Could move up (negative) or down (positive)
  y += random(-5, 5);
  
  // Keep position on canvas using constrain()
  // constrain(value, min, max) keeps value within range
  // Prevents circle from going off-screen
  x = constrain(x, 0, width);   // Keep x between 0 and canvas width
  y = constrain(y, 0, height);  // Keep y between 0 and canvas height
  
  // Draw small circle at current position
  // Since background isn't cleared, circles accumulate, creating a trail
  ellipse(x, y, 10, 10);
  
  // HOW IT WORKS:
  // Frame 1: Start at (200, 200), move randomly to (203, 198)
  // Frame 2: From (203, 198), move randomly to (201, 195)
  // Frame 3: From (201, 195), move randomly to (199, 197)
  // ... continues, creating a meandering path
  
  // EXPERIMENT:
  // - Change random range: random(-10, 10) for bigger steps
  // - Add color variation: fill(frameCount % 255, 100, 100)
  // - Change circle size: ellipse(x, y, random(5, 15), random(5, 15))
  // - Try noise() instead for smoother movement (see noise-example.js)

