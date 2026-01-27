// Loading Images - Simple Version
// Clean code without comments
// 
// For OpenProcessing.org: Write sketch, SAVE IT, then upload image via Assets panel
// For p5.js editor: Place image in same folder, use filename
// For external: Use full URL like 'https://example.com/image.jpg'

let myImage;

function preload() {
  myImage = loadImage('your-image.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(myImage, 0, 0);
}
