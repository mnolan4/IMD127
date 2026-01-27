// Video Pixels
// Demonstrates pixel-level manipulation of video
//
// You can access and modify individual pixels in video using loadPixels() and
// updatePixels(). This allows for custom effects that go beyond built-in filters.
// You can manipulate colors, create custom effects, and extract information
// from video at the pixel level.
//
// IMPORTANT: Requires camera permission. Pixel manipulation can be performance-intensive.

let video;

function setup() {
  createCanvas(640, 480);
  
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
}

function draw() {
  background(0);
  
  // Load video pixels into pixels array
  // This must be called before accessing pixels
  video.loadPixels();
  
  // Load canvas pixels (we'll modify and display them)
  loadPixels();
  
  // Loop through all pixels
  // pixels array format: [R, G, B, A, R, G, B, A, ...]
  // Each pixel has 4 values: Red, Green, Blue, Alpha
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      // Calculate index in pixels array
      // Formula: (y * width + x) * 4
      let index = (y * video.width + x) * 4;
      
      // Get pixel values from video
      let r = video.pixels[index];     // Red
      let g = video.pixels[index + 1]; // Green
      let b = video.pixels[index + 2]; // Blue
      let a = video.pixels[index + 3]; // Alpha
      
      // MANIPULATE PIXELS
      // Example 1: Invert colors
      // r = 255 - r;
      // g = 255 - g;
      // b = 255 - b;
      
      // Example 2: Grayscale
      // let gray = (r + g + b) / 3;
      // r = gray;
      // g = gray;
      // b = gray;
      
      // Example 3: Brightness adjustment
      let brightness = map(mouseX, 0, width, 0.5, 2.0);
      r = constrain(r * brightness, 0, 255);
      g = constrain(g * brightness, 0, 255);
      b = constrain(b * brightness, 0, 255);
      
      // Example 4: Color shift
      // Swap color channels
      // let temp = r;
      // r = g;
      // g = b;
      // b = temp;
      
      // Example 5: Threshold (black and white)
      // let avg = (r + g + b) / 3;
      // if (avg > 128) {
      //   r = g = b = 255;
      // } else {
      //   r = g = b = 0;
      // }
      
      // Set pixel values in canvas
      // Calculate index for canvas pixels
      let canvasIndex = (y * width + x) * 4;
      pixels[canvasIndex] = r;         // Red
      pixels[canvasIndex + 1] = g;     // Green
      pixels[canvasIndex + 2] = b;     // Blue
      pixels[canvasIndex + 3] = a;     // Alpha (usually 255)
    }
  }
  
  // Update canvas with modified pixels
  // This must be called after modifying pixels
  updatePixels();
  
  // Display instructions
  fill(255);
  textAlign(LEFT);
  textSize(14);
  text('Move mouse X to adjust brightness', 10, 30);
  text('Pixel manipulation example', 10, 50);
}

// KEY CONCEPTS:
// 1. loadPixels() loads pixels into pixels[] array
// 2. pixels[] format: [R, G, B, A, R, G, B, A, ...]
// 3. Index calculation: (y * width + x) * 4
// 4. Modify pixel values (r, g, b, a)
// 5. updatePixels() applies changes to canvas
//
// PIXEL ARRAY STRUCTURE:
// - Each pixel = 4 consecutive values (RGBA)
// - Index for pixel at (x, y): (y * width + x) * 4
// - Red: pixels[index]
// - Green: pixels[index + 1]
// - Blue: pixels[index + 2]
// - Alpha: pixels[index + 3]
//
// COMMON MANIPULATIONS:
// - Brightness: multiply r, g, b by factor
// - Contrast: adjust based on 128 (midpoint)
// - Color effects: swap channels, modify individual channels
// - Threshold: convert to black/white based on brightness
// - Edge detection: compare neighboring pixels
//
// PERFORMANCE:
// - Pixel manipulation is computationally expensive
// - Consider processing every Nth pixel for better performance
// - Use smaller video sizes for complex manipulations
