// Using console.log() for Debugging and Understanding Code
// Demonstrates how to use console.log() to see what's happening in your code
//
// console.log() is one of the most important tools for learning and debugging.
// It lets you see values, check if code is running, and understand what your program is doing.
//
// IMPORTANT: console.log() doesn't appear on your canvas - it appears in the browser's
// Developer Console. You need to open the console to see the output.

// ============================================
// HOW TO OPEN THE CONSOLE
// ============================================
// 
// p5.js Web Editor (editor.p5js.org):
// - Click the "Console" button at the bottom of the editor
// - Or press Ctrl+Shift+K (Windows/Linux) or Cmd+Option+K (Mac)
//
// OpenProcessing.org:
// - Press F12 to open Developer Tools
// - Click the "Console" tab
// - Or right-click on the page → "Inspect" → "Console" tab
//
// Browser (local HTML file):
// - Press F12 to open Developer Tools
// - Click the "Console" tab
// - Or right-click → "Inspect" → "Console" tab

function setup() {
  createCanvas(400, 400);
  
  // ============================================
  // BASIC USAGE: Logging simple values
  // ============================================
  
  // Log a string (text message)
  console.log("Setup function is running!");
  
  // Log a number
  console.log(42);
  
  // Log a variable value
  let canvasWidth = 400;
  let canvasHeight = 400;
  console.log("Canvas width:", canvasWidth);
  console.log("Canvas height:", canvasHeight);
  
  // Log multiple values at once (separated by commas)
  console.log("Canvas size:", canvasWidth, "x", canvasHeight);
  
  // ============================================
  // LOGGING VARIABLES AND CALCULATIONS
  // ============================================
  
  // See what calculations produce
  let centerX = width / 2;
  let centerY = height / 2;
  console.log("Center point:", centerX, centerY);
  
  // Check if a condition is true or false
  let isWide = width > 300;
  console.log("Is canvas wide?", isWide);
  
  // ============================================
  // LOGGING IN draw() - See values change over time
  // ============================================
  // Note: Be careful! draw() runs 60 times per second, so logging here
  // will create A LOT of output. Use sparingly or with conditions.
}

function draw() {
  background(220);
  
  // Draw a circle that follows the mouse
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 50, 50);
  
  // ============================================
  // LOGGING MOUSE POSITION (with condition to limit output)
  // ============================================
  // Only log when mouse is clicked to avoid flooding the console
  // Uncomment the code below to see it in action:
  
  // if (mouseIsPressed) {
  //   console.log("Mouse position:", mouseX, mouseY);
  // }
  
  // ============================================
  // LOGGING ONCE (using frameCount)
  // ============================================
  // Log something only on the first frame
  if (frameCount === 1) {
    console.log("First frame! Draw function started.");
    console.log("Canvas dimensions:", width, "x", height);
  }
  
  // Log something every 60 frames (once per second at 60fps)
  if (frameCount % 60 === 0) {
    console.log("Frame:", frameCount, "Mouse at:", mouseX, mouseY);
  }
  
  // ============================================
  // COMMON DEBUGGING PATTERNS
  // ============================================
  
  // 1. Check if a function is being called
  // console.log("draw() is running");
  
  // 2. See what a variable contains
  // let myValue = 100;
  // console.log("myValue is:", myValue);
  
  // 3. Check if a condition is true
  // if (mouseX > 200) {
  //   console.log("Mouse is on the right side");
  // }
  
  // 4. See the result of a calculation
  // let distance = dist(mouseX, mouseY, width/2, height/2);
  // console.log("Distance from center:", distance);
}

// ============================================
// WHEN TO USE console.log()
// ============================================
//
// 1. **Understanding code flow**: See which functions run and when
//    Example: console.log("setup() ran"); console.log("draw() ran");
//
// 2. **Checking variable values**: See what numbers, strings, or other values your variables contain
//    Example: console.log("x position:", x);
//
// 3. **Debugging problems**: When something isn't working, log values to see what's wrong
//    Example: console.log("Expected 200, got:", myValue);
//
// 4. **Learning new functions**: Log the output of functions to understand what they return
//    Example: console.log("Random number:", random(100));
//
// 5. **Tracking changes**: See how values change over time
//    Example: Log in draw() with a condition to see values update
//
// ============================================
// BEST PRACTICES
// ============================================
//
// 1. **Use descriptive messages**: 
//    Good: console.log("Circle X position:", circleX);
//    Bad: console.log(circleX);
//
// 2. **Don't log in draw() without conditions**: 
//    draw() runs 60 times per second - logging every frame floods the console
//    Use: if (frameCount % 60 === 0) { console.log(...); }
//
// 3. **Remove or comment out logs when done**: 
//    Clean up your code by removing debug logs before sharing
//
// 4. **Use multiple logs to trace execution**:
//    console.log("Step 1: Starting");
//    console.log("Step 2: Calculating");
//    console.log("Step 3: Drawing");
//
// 5. **Log before and after changes**:
//    console.log("Before:", myValue);
//    myValue = myValue + 10;
//    console.log("After:", myValue);
