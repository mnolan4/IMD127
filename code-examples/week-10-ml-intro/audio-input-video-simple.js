// Audio Input Video - Simple Version
// Clean code without comments

let mic;
let audioLevel = 0;

let video;
let videoBrightness = 1.0;
let videoContrast = 1.0;
let videoSaturation = 1.0;

let brightnessSlider;
let contrastSlider;
let saturationSlider;
let sensitivitySlider;

function setup() {
  createCanvas(640, 480);
  
  mic = new p5.AudioIn();
  mic.start();
  
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  
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
  
  audioLevel = mic.getLevel();
  
  let sensitivity = sensitivitySlider.value() / 100.0;
  
  let brightnessBase = brightnessSlider.value() / 100.0;
  videoBrightness = brightnessBase + (audioLevel * sensitivity * 2.0);
  videoBrightness = constrain(videoBrightness, 0, 2);
  
  let contrastBase = contrastSlider.value() / 100.0;
  videoContrast = contrastBase + (audioLevel * sensitivity * 1.5);
  videoContrast = constrain(videoContrast, 0, 2);
  
  let saturationBase = saturationSlider.value() / 100.0;
  videoSaturation = saturationBase + (audioLevel * sensitivity * 1.5);
  videoSaturation = constrain(videoSaturation, 0, 2);
  
  push();
  
  image(video, 0, 0);
  
  if (videoBrightness !== 1.0) {
    blendMode(SCREEN);
    fill(0, 0, 0, (1 - videoBrightness) * 255);
    rect(0, 0, width, height);
    blendMode(BLEND);
  }
  
  if (videoContrast !== 1.0) {
    loadPixels();
    for (let i = 0; i < pixels.length; i += 4) {
      let r = pixels[i];
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      
      r = ((r - 128) * videoContrast) + 128;
      g = ((g - 128) * videoContrast) + 128;
      b = ((b - 128) * videoContrast) + 128;
      
      pixels[i] = constrain(r, 0, 255);
      pixels[i + 1] = constrain(g, 0, 255);
      pixels[i + 2] = constrain(b, 0, 255);
    }
    updatePixels();
  }
  
  if (videoSaturation !== 1.0) {
    tint(255, videoSaturation * 255);
    image(video, 0, 0);
    noTint();
  }
  
  pop();
  
  fill(255);
  textAlign(LEFT);
  textSize(14);
  text('Audio Level: ' + nf(audioLevel, 1, 3), 20, height - 100);
  text('Brightness: ' + nf(videoBrightness, 1, 2), 20, height - 80);
  text('Contrast: ' + nf(videoContrast, 1, 2), 20, height - 60);
  text('Saturation: ' + nf(videoSaturation, 1, 2), 20, height - 40);
  
  let meterWidth = map(audioLevel, 0, 1, 0, width - 40);
  fill(100, 255, 100);
  rect(20, height - 20, meterWidth, 10);
  
  textSize(12);
  text('Brightness Base', 240, 35);
  text('Contrast Base', 240, 65);
  text('Saturation Base', 240, 95);
  text('Sensitivity', 240, 125);
}
