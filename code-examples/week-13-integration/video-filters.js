// Video Filters
// Demonstrates applying filters and effects to video
//
// p5.js provides built-in filters and effects that can be applied to video.
// You can use tint() for color effects, filter() for image processing,
// and other drawing functions to manipulate video appearance.
//
// IMPORTANT: Requires camera permission. Works best with HTTPS or localhost.

let video;
let currentFilter = 'none';
let videoImage;

function setup() {
  createCanvas(640, 480);
  
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
}

function draw() {
  background(0);
  
  // Copy video frame to image using get()
  // This converts the video MediaElement to a p5.Image
  // p5.Image works properly with filter() and avoids texture() errors
  videoImage = video.get();
  
  // Apply different filters based on currentFilter variable
  // Filters are applied to the p5.Image, not the video element
  // This avoids texture() errors with video MediaElements
  
  if (currentFilter === 'none') {
    // No filter - normal video
    image(videoImage, 0, 0);
  } else if (currentFilter === 'grayscale') {
    // Grayscale filter
    videoImage.filter(GRAY);
    image(videoImage, 0, 0);
  } else if (currentFilter === 'threshold') {
    // Threshold filter (black and white)
    videoImage.filter(THRESHOLD);
    image(videoImage, 0, 0);
  } else if (currentFilter === 'invert') {
    // Invert colors
    videoImage.filter(INVERT);
    image(videoImage, 0, 0);
  } else if (currentFilter === 'blur') {
    // Blur effect
    videoImage.filter(BLUR, 3);
    image(videoImage, 0, 0);
  } else if (currentFilter === 'tint') {
    // Color tint effect
    tint(255, 100, 100);  // Red tint
    image(videoImage, 0, 0);
    noTint();  // Reset tint
  } else if (currentFilter === 'posterize') {
    // Posterize (reduce color levels)
    videoImage.filter(POSTERIZE, 4);
    image(videoImage, 0, 0);
  }
  
  // Display current filter
  fill(255);
  textAlign(LEFT);
  textSize(16);
  text('Filter: ' + currentFilter, 10, 30);
  text('Press 1-7 to change filter', 10, 50);
}

function keyPressed() {
  // Change filter with number keys
  if (key === '1') currentFilter = 'none';
  if (key === '2') currentFilter = 'grayscale';
  if (key === '3') currentFilter = 'threshold';
  if (key === '4') currentFilter = 'invert';
  if (key === '5') currentFilter = 'blur';
  if (key === '6') currentFilter = 'tint';
  if (key === '7') currentFilter = 'posterize';
}

// AVAILABLE FILTERS:
// - GRAY: Convert to grayscale
// - THRESHOLD: Black and white threshold
// - INVERT: Invert colors
// - BLUR: Blur effect (takes parameter: BLUR, amount)
// - POSTERIZE: Reduce color levels (takes parameter: POSTERIZE, levels)
// - ERODE: Erode effect
// - DILATE: Dilate effect
//
// TINT:
// - tint(r, g, b) or tint(r, g, b, alpha): Color overlay
// - noTint(): Remove tint
//
// KEY CONCEPTS:
// 1. filter() applies image processing effects
// 2. Filters affect everything drawn after the filter() call
// 3. tint() adds color overlay to images/video
// 4. Multiple filters can be combined
// 5. Filters are applied in order
//
// EXPERIMENT:
// - Combine multiple filters
// - Use tint() with different colors
// - Animate filter parameters
// - Use mouse position to control filter intensity
