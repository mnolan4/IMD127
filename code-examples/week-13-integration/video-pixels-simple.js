// Video Pixels - Simple Version
// Clean code without comments

let video;

function setup() {
  createCanvas(640, 480);
  
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
}

function draw() {
  background(0);
  
  video.loadPixels();
  loadPixels();
  
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (y * video.width + x) * 4;
      
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let a = video.pixels[index + 3];
      
      let brightness = map(mouseX, 0, width, 0.5, 2.0);
      r = constrain(r * brightness, 0, 255);
      g = constrain(g * brightness, 0, 255);
      b = constrain(b * brightness, 0, 255);
      
      let canvasIndex = (y * width + x) * 4;
      pixels[canvasIndex] = r;
      pixels[canvasIndex + 1] = g;
      pixels[canvasIndex + 2] = b;
      pixels[canvasIndex + 3] = a;
    }
  }
  
  updatePixels();
  
  fill(255);
  textAlign(LEFT);
  textSize(14);
  text('Move mouse X to adjust brightness', 10, 30);
}
