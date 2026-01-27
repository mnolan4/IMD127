// Video Basic
// Demonstrates basic video capture and display from webcam
//
// This example shows how to capture video from a webcam and display it on the canvas.
// Video capture is a built-in p5.js feature that doesn't require external libraries.
// This is the foundation for video-based interactive projects.
//
// IMPORTANT: Browser will ask for permission to access camera. Works best with
// HTTPS or localhost (security requirement).

// Video capture object
let video;

function setup() {
  createCanvas(640, 480);
  
  // Create video capture from webcam
  // createCapture(VIDEO) captures video from the default camera
  video = createCapture(VIDEO);
  
  // Set video size to match canvas
  video.size(640, 480);
  
  // Hide the default video element
  // We'll draw the video ourselves using image()
  video.hide();
  
  // Browser will prompt for camera permission
  // User must grant permission for this to work
}

function draw() {
  background(0);
  
  // Display video on canvas
  // image(video, x, y) draws the video at position (x, y)
  image(video, 0, 0);
  
  // You can also specify width and height:
  // image(video, 0, 0, width, height);  // Full canvas
  // image(video, 0, 0, 320, 240);      // Half size
  
  // Display instructions
  fill(255);
  textAlign(LEFT);
  textSize(14);
  text('Video from webcam', 10, 30);
  text('Video size: ' + video.width + ' x ' + video.height, 10, 50);
}

// KEY CONCEPTS:
// 1. createCapture(VIDEO) captures video from webcam
// 2. video.hide() hides the default HTML video element
// 3. image(video, x, y) displays video on canvas
// 4. video.width and video.height give video dimensions
// 5. Browser permission required for camera access
//
// COMMON PATTERNS:
// - Mirror video: image(video, 0, 0, width, height) (normal)
// - Flip video: scale(-1, 1) then translate(-width, 0)
// - Multiple video displays: image(video, x1, y1), image(video, x2, y2)
// - Video as background: image(video, 0, 0) at start of draw()
//
// NOTE: Students MAY use AI tools for these projects but must document their use
