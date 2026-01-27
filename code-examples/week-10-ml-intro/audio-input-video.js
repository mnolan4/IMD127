// Audio Input Video
// Demonstrates using audio input (microphone) to control video properties
//
// This example captures audio from the microphone and uses the volume level
// to control the brightness, contrast, and saturation of live video from
// the webcam. The louder the sound, the more the video properties change.
//
// IMPORTANT: Requires p5.sound library. Browser will ask for permission
// to access microphone and camera. Both must be granted for this to work.
// Works best with HTTPS or localhost.

// Audio input
let mic;
let audioLevel = 0;  // Current volume level (0.0 to 1.0)

// Video capture
let video;
let videoBrightness = 1.0;
let videoContrast = 1.0;
let videoSaturation = 1.0;

// UI controls for sensitivity
let brightnessSlider;
let contrastSlider;
let saturationSlider;
let sensitivitySlider;

function setup() {
  createCanvas(640, 480);
  
  // Create audio input (microphone)
  // p5.AudioIn captures audio from the default microphone
  mic = new p5.AudioIn();
  mic.start();  // Start capturing audio
  
  // Create video capture (webcam)
  // createCapture(VIDEO) captures video from the default camera
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();  // Hide the default video element (we'll draw it ourselves)
  
  // UI controls for adjusting sensitivity
  brightnessSlider = createSlider(0, 200, 100, 1);
  brightnessSlider.position(20, 20);
  brightnessSlider.style('width', '200px');
  
  contrastSlider = createSlider(0, 200, 100, 1);
  contrastSlider.position(20, 50);
  contrastSlider.style('width', '200px');
  
  saturationSlider = createSlider(0, 200, 100, 1);
  saturationSlider.position(20, 80);
  saturationSlider.style('width', '200px');
  
  sensitivitySlider = createSlider(0, 100, 50, 1);
  sensitivitySlider.position(20, 110);
  sensitivitySlider.style('width', '200px');
}

function draw() {
  background(0);
  
  // Get current audio level
  // getLevel() returns the current volume (0.0 to 1.0)
  // Smooth it slightly to reduce jitter
  audioLevel = mic.getLevel();
  
  // Get sensitivity setting (0-1)
  let sensitivity = sensitivitySlider.value() / 100.0;
  
  // Map audio level to video properties
  // Higher audio = more change in video properties
  // Use sensitivity to control how much audio affects video
  
  // Brightness: louder = brighter
  let brightnessBase = brightnessSlider.value() / 100.0;
  videoBrightness = brightnessBase + (audioLevel * sensitivity * 2.0);
  videoBrightness = constrain(videoBrightness, 0, 2);
  
  // Contrast: louder = more contrast
  let contrastBase = contrastSlider.value() / 100.0;
  videoContrast = contrastBase + (audioLevel * sensitivity * 1.5);
  videoContrast = constrain(videoContrast, 0, 2);
  
  // Saturation: louder = more saturated
  let saturationBase = saturationSlider.value() / 100.0;
  videoSaturation = saturationBase + (audioLevel * sensitivity * 1.5);
  videoSaturation = constrain(videoSaturation, 0, 2);
  
  // Apply filters to video
  // p5.js provides tint() for color manipulation
  // We'll use a combination of techniques to simulate brightness/contrast/saturation
  
  push();
  
  // Draw video
  image(video, 0, 0);
  
  // Apply brightness effect using blend mode
  if (videoBrightness !== 1.0) {
    blendMode(SCREEN);
    fill(0, 0, 0, (1 - videoBrightness) * 255);
    rect(0, 0, width, height);
    blendMode(BLEND);
  }
  
  // Apply contrast effect
  if (videoContrast !== 1.0) {
    // Contrast is more complex - we'll use a simple approximation
    loadPixels();
    for (let i = 0; i < pixels.length; i += 4) {
      let r = pixels[i];
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      
      // Apply contrast
      r = ((r - 128) * videoContrast) + 128;
      g = ((g - 128) * videoContrast) + 128;
      b = ((b - 128) * videoContrast) + 128;
      
      pixels[i] = constrain(r, 0, 255);
      pixels[i + 1] = constrain(g, 0, 255);
      pixels[i + 2] = constrain(b, 0, 255);
    }
    updatePixels();
  }
  
  // Apply saturation effect using tint
  if (videoSaturation !== 1.0) {
    tint(255, videoSaturation * 255);
    image(video, 0, 0);
    noTint();
  }
  
  pop();
  
  // Display audio level and settings
  fill(255);
  textAlign(LEFT);
  textSize(14);
  text('Audio Level: ' + nf(audioLevel, 1, 3), 20, height - 100);
  text('Brightness: ' + nf(videoBrightness, 1, 2), 20, height - 80);
  text('Contrast: ' + nf(videoContrast, 1, 2), 20, height - 60);
  text('Saturation: ' + nf(videoSaturation, 1, 2), 20, height - 40);
  
  // Draw audio level meter
  let meterWidth = map(audioLevel, 0, 1, 0, width - 40);
  fill(100, 255, 100);
  rect(20, height - 20, meterWidth, 10);
  
  // Display UI labels
  textSize(12);
  text('Brightness Base', 240, 35);
  text('Contrast Base', 240, 65);
  text('Saturation Base', 240, 95);
  text('Sensitivity', 240, 125);
}

// KEY CONCEPTS:
// 1. p5.AudioIn captures audio from microphone
// 2. getLevel() returns current volume (0.0 to 1.0)
// 3. createCapture(VIDEO) captures video from webcam
// 4. Audio level can be mapped to any visual property
// 5. Smoothing audio levels reduces jitter
// 6. Browser permissions required for mic and camera access
//
// EXPERIMENT:
// - Map audio to different video properties
// - Use frequency analysis instead of volume
// - Apply different visual effects based on audio
// - Combine with UI controls for more control
// - Use audio to trigger video filters
