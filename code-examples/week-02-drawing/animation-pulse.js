// Pulsing Animation
// Demonstrates changing size over time using sine wave
//
// This example uses sin() (sine function) to create smooth, organic pulsing.
// Sine waves create smooth oscillations that are perfect for natural-feeling
// animations like breathing, pulsing, or gentle movement.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // sin() is a mathematical function that creates a smooth wave
  // sin() takes an angle (in radians) and returns a value between -1 and 1
  // The value oscillates smoothly: -1 → 0 → 1 → 0 → -1 → ...
  
  // frameCount * 0.1 creates a slowly increasing angle
  // The 0.1 multiplier controls speed: smaller = slower, larger = faster
  // sin(frameCount * 0.1) oscillates smoothly between -1 and 1
  
  // map() converts a value from one range to another
  // Parameters: value, inputMin, inputMax, outputMin, outputMax
  // map(sin(...), -1, 1, 20, 100) converts:
  //   -1 → 20 (smallest size)
  //    0 → 60 (middle size)
  //    1 → 100 (largest size)
  let pulseSize = map(sin(frameCount * 0.1), -1, 1, 20, 100);

  // Draw circle with changing size
  // Size smoothly pulses between 20 and 100 pixels
  ellipse(200, 200, pulseSize, pulseSize);
  
  // EXPERIMENT:
  // - Change 0.1 to 0.05 (slower) or 0.2 (faster)
  // - Change size range: map(..., -1, 1, 10, 150)
  // - Use cos() instead of sin() for different timing
  // - Try: size = 50 + sin(frameCount * 0.1) * 30 (alternative approach)

