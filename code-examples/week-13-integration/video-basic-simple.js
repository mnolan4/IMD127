// Video Basic - Simple Version
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
  image(video, 0, 0);
}
