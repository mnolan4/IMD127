// Video Filters - Simple Version
// Clean code without comments

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
  
  // Copy video frame to image (this converts video to p5.Image)
  // This avoids texture() errors when applying filters
  videoImage = video.get();
  
  // Apply filter to the image
  if (currentFilter === 'none') {
    image(videoImage, 0, 0);
  } else if (currentFilter === 'grayscale') {
    videoImage.filter(GRAY);
    image(videoImage, 0, 0);
  } else if (currentFilter === 'threshold') {
    videoImage.filter(THRESHOLD);
    image(videoImage, 0, 0);
  } else if (currentFilter === 'invert') {
    videoImage.filter(INVERT);
    image(videoImage, 0, 0);
  } else if (currentFilter === 'blur') {
    videoImage.filter(BLUR, 3);
    image(videoImage, 0, 0);
  } else if (currentFilter === 'tint') {
    tint(255, 100, 100);
    image(videoImage, 0, 0);
    noTint();
  } else if (currentFilter === 'posterize') {
    videoImage.filter(POSTERIZE, 4);
    image(videoImage, 0, 0);
  }
  
  fill(255);
  textAlign(LEFT);
  textSize(16);
  text('Filter: ' + currentFilter, 10, 30);
  text('Press 1-7 to change filter', 10, 50);
}

function keyPressed() {
  if (key === '1') currentFilter = 'none';
  if (key === '2') currentFilter = 'grayscale';
  if (key === '3') currentFilter = 'threshold';
  if (key === '4') currentFilter = 'invert';
  if (key === '5') currentFilter = 'blur';
  if (key === '6') currentFilter = 'tint';
  if (key === '7') currentFilter = 'posterize';
}
