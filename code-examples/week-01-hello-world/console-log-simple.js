// Using console.log() - Simple Version
// Clean code without comments
//
// Open the console to see output:
// - p5.js editor: Click "Console" button or Ctrl+Shift+K / Cmd+Option+K
// - OpenProcessing: Press F12 → Console tab
// - Browser: Press F12 → Console tab

function setup() {
  createCanvas(400, 400);
  
  // Basic logging
  console.log("Setup is running!");
  console.log("Canvas size:", width, "x", height);
  
  // Log variables
  let centerX = width / 2;
  let centerY = height / 2;
  console.log("Center:", centerX, centerY);
}

function draw() {
  background(220);
  
  // Draw circle at mouse position
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 50, 50);
  
  // Log only on first frame (avoid flooding console)
  if (frameCount === 1) {
    console.log("Draw started");
  }
  
  // Log every 60 frames (once per second)
  if (frameCount % 60 === 0) {
    console.log("Frame:", frameCount, "Mouse:", mouseX, mouseY);
  }
}
