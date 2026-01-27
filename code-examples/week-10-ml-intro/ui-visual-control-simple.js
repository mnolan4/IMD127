// UI Visual Control - Simple Version
// Clean code without comments

let redValue = 255;
let greenValue = 100;
let blueValue = 100;
let shapeSize = 100;
let shapeX = 200;
let shapeY = 200;
let rotationSpeed = 0.02;
let animationMode = 'rotate';
let showGrid = false;
let showParticles = false;

let redSlider;
let greenSlider;
let blueSlider;
let sizeSlider;
let speedSlider;
let modeButton;
let gridCheckbox;
let particlesCheckbox;

let rotationAngle = 0;
let particles = [];

function setup() {
  createCanvas(400, 500);
  
  redSlider = createSlider(0, 255, 255, 1);
  redSlider.position(20, 20);
  redSlider.style('width', '200px');
  
  greenSlider = createSlider(0, 255, 100, 1);
  greenSlider.position(20, 50);
  greenSlider.style('width', '200px');
  
  blueSlider = createSlider(0, 255, 100, 1);
  blueSlider.position(20, 80);
  blueSlider.style('width', '200px');
  
  sizeSlider = createSlider(20, 200, 100, 1);
  sizeSlider.position(20, 110);
  sizeSlider.style('width', '200px');
  
  speedSlider = createSlider(0, 100, 2, 1);
  speedSlider.position(20, 140);
  speedSlider.style('width', '200px');
  
  modeButton = createButton('Change Mode');
  modeButton.position(20, 170);
  modeButton.mousePressed(changeMode);
  
  gridCheckbox = createCheckbox('Show Grid', false);
  gridCheckbox.position(20, 200);
  
  particlesCheckbox = createCheckbox('Show Particles', false);
  particlesCheckbox.position(20, 220);
  
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      vx: random(-2, 2),
      vy: random(-2, 2),
      diameter: random(2, 8)
    });
  }
}

function draw() {
  background(30);
  
  redValue = redSlider.value();
  greenValue = greenSlider.value();
  blueValue = blueSlider.value();
  shapeSize = sizeSlider.value();
  rotationSpeed = speedSlider.value() / 100.0;
  showGrid = gridCheckbox.checked();
  showParticles = particlesCheckbox.checked();
  
  if (showGrid) {
    drawGrid();
  }
  
  if (showParticles) {
    updateParticles();
    drawParticles();
  }
  
  push();
  translate(shapeX, shapeY);
  
  if (animationMode === 'rotate') {
    rotationAngle += rotationSpeed;
    rotate(rotationAngle);
  } else if (animationMode === 'pulse') {
    let pulseSize = shapeSize + sin(frameCount * rotationSpeed * 10) * 20;
    shapeSize = pulseSize;
  }
  
  fill(redValue, greenValue, blueValue);
  noStroke();
  rectMode(CENTER);
  rect(0, 0, shapeSize, shapeSize);
  
  fill(redValue * 0.7, greenValue * 0.7, blueValue * 0.7);
  rect(0, 0, shapeSize * 0.6, shapeSize * 0.6);
  
  pop();
  
  fill(255);
  textAlign(LEFT);
  textSize(12);
  text('R: ' + redValue, 240, 35);
  text('G: ' + greenValue, 240, 65);
  text('B: ' + blueValue, 240, 95);
  text('Size: ' + int(shapeSize), 240, 125);
  text('Speed: ' + nf(rotationSpeed, 1, 2), 240, 155);
  text('Mode: ' + animationMode, 240, 185);
  
  fill(redValue, greenValue, blueValue);
  stroke(255);
  strokeWeight(2);
  rect(320, 20, 60, 60);
}

function drawGrid() {
  stroke(100, 50);
  strokeWeight(1);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }
}

function updateParticles() {
  for (let p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    
    if (p.x < 0) p.x = width;
    if (p.x > width) p.x = 0;
    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;
  }
}

function drawParticles() {
  fill(redValue, greenValue, blueValue, 150);
  noStroke();
  for (let p of particles) {
    ellipse(p.x, p.y, p.diameter, p.diameter);
  }
}

function changeMode() {
  if (animationMode === 'rotate') {
    animationMode = 'pulse';
  } else if (animationMode === 'pulse') {
    animationMode = 'static';
  } else {
    animationMode = 'rotate';
  }
}
