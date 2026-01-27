// Particle System
// Demonstrates managing multiple objects with arrays
//
// Particle systems use arrays to manage many objects (particles).
// Each particle is an object stored in an array. We can add particles,
// update them, and draw them all using array methods and loops.

// Empty array to store particles
// Start with no particles, add them as needed
let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Add new particle when mouse is pressed
  // mouseIsPressed is true when mouse button is held down
  if (mouseIsPressed) {
    // push() adds a new element to the end of the array
    // Each particle is an object with properties: x, y, speedY
    particles.push({
      x: mouseX,              // Start at mouse X position
      y: mouseY,              // Start at mouse Y position
      speedY: random(1, 3)    // Random downward speed between 1-3
    });
    // Each time mouse is pressed, a new particle object is added to array
  }
  
  // Update and draw all particles
  // Loop through array to access each particle
  for (let i = 0; i < particles.length; i++) {
    // particles[i] accesses the particle at index i
    // particles[i].y accesses the y property of that particle
    // particles[i].speedY accesses the speedY property
    
    // Update particle position (move it down)
    particles[i].y += particles[i].speedY;
    
    // Draw particle at its current position
    ellipse(particles[i].x, particles[i].y, 10, 10);
  }
  
  // HOW IT WORKS:
  // 1. Hold mouse down → particles added to array continuously
  // 2. Each frame → all particles move down by their speed
  // 3. Result → falling particles that accumulate on screen
  
  // EXPERIMENT:
  // - Add gravity: particles[i].speedY += 0.1
  // - Remove particles when off screen: particles.splice(i, 1)
  // - Add color variation: fill(random(255), random(255), random(255))
  // - Add horizontal movement: particles[i].x += random(-1, 1)

