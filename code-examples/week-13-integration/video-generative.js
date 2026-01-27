// Video Generative
// Demonstrates using video as input for generative systems
//
// Video can be used as input to drive generative art systems. Extract information
// from video (brightness, color, motion) and use it to control particles, patterns,
// and visual effects. This creates reactive systems where video influences generation.
//
// IMPORTANT: Requires camera permission. This combines video capture with generative techniques.

let video;
let particles = [];

function setup() {
  createCanvas(640, 480);
  
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  
  // Create particles
  for (let i = 0; i < 500; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      vx: random(-1, 1),
      vy: random(-1, 1),
      diameter: random(2, 6)
    });
  }
}

function draw() {
  // Semi-transparent background for trails
  fill(0, 10);
  rect(0, 0, width, height);
  
  // Load video pixels to extract information
  video.loadPixels();
  
  // Update and draw particles based on video
  for (let p of particles) {
    // Get video pixel at particle position
    let x = floor(p.x);
    let y = floor(p.y);
    
    // Make sure coordinates are valid
    if (x >= 0 && x < video.width && y >= 0 && y < video.height) {
      let index = (y * video.width + x) * 4;
      
      // Extract color from video
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      
      // Calculate brightness
      let brightness = (r + g + b) / 3;
      
      // Use brightness to control particle size
      p.diameter = map(brightness, 0, 255, 2, 10);
      
      // Use color from video for particle
      fill(r, g, b, 200);
      
      // Use brightness to control velocity
      let velocityFactor = map(brightness, 0, 255, 0.5, 3);
      p.vx += (random(-1, 1) * velocityFactor) * 0.1;
      p.vy += (random(-1, 1) * velocityFactor) * 0.1;
    }
    
    // Update particle position
    p.x += p.vx;
    p.y += p.vy;
    
    // Wrap around edges
    if (p.x < 0) p.x = width;
    if (p.x > width) p.x = 0;
    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;
    
    // Apply friction
    p.vx *= 0.98;
    p.vy *= 0.98;
    
    // Draw particle
    noStroke();
    ellipse(p.x, p.y, p.diameter, p.diameter);
  }
  
  // Optionally draw video in background (semi-transparent)
  // tint(255, 50);
  // image(video, 0, 0);
  // noTint();
  
  // Display instructions
  fill(255);
  textAlign(LEFT);
  textSize(14);
  text('Video-driven particle system', 10, 30);
  text('Particles react to video brightness and color', 10, 50);
}

// KEY CONCEPTS:
// 1. Extract information from video (brightness, color, motion)
// 2. Use video data to control generative systems
// 3. Map video properties to visual parameters
// 4. Create reactive systems where video influences generation
//
// EXTRACTION TECHNIQUES:
// - Brightness: (r + g + b) / 3
// - Color: Use r, g, b values directly
// - Motion: Compare frames (requires storing previous frame)
// - Regions: Sample specific areas of video
//
// MAPPING PATTERNS:
// - Brightness → size, speed, opacity
// - Color → particle color, background color
// - Motion → particle velocity, direction
// - Position → particle position, spawn location
//
// EXPERIMENT:
// - Use video color to control particle colors
// - Use brightness to control particle behavior
// - Sample multiple points from video
// - Compare frames to detect motion
// - Use video to seed random processes
//
// NOTE: Students MAY use AI tools for these projects but must document their use
