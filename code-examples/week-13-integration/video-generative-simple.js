// Video Generative - Simple Version
// Clean code without comments

let video;
let particles = [];

function setup() {
  createCanvas(640, 480);
  
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  
  for (let i = 0; i < 500; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      vx: random(-1, 1),
      vy: random(-1, 1),
      diameter: random(2, 6)
    });
  }
}

function draw() {
  fill(0, 10);
  rect(0, 0, width, height);
  
  video.loadPixels();
  
  for (let p of particles) {
    let x = floor(p.x);
    let y = floor(p.y);
    
    if (x >= 0 && x < video.width && y >= 0 && y < video.height) {
      let index = (y * video.width + x) * 4;
      
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      
      let brightness = (r + g + b) / 3;
      
      p.diameter = map(brightness, 0, 255, 2, 10);
      
      fill(r, g, b, 200);
      
      let velocityFactor = map(brightness, 0, 255, 0.5, 3);
      p.vx += (random(-1, 1) * velocityFactor) * 0.1;
      p.vy += (random(-1, 1) * velocityFactor) * 0.1;
    }
    
    p.x += p.vx;
    p.y += p.vy;
    
    if (p.x < 0) p.x = width;
    if (p.x > width) p.x = 0;
    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;
    
    p.vx *= 0.98;
    p.vy *= 0.98;
    
    noStroke();
    ellipse(p.x, p.y, p.diameter, p.diameter);
  }
  
  fill(255);
  textAlign(LEFT);
  textSize(14);
  text('Video-driven particle system', 10, 30);
  text('Particles react to video brightness and color', 10, 50);
}
