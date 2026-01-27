// UI Controls Basic - Simple Version
// Clean code without comments

let slider1;
let slider2;
let button1;
let checkbox1;
let select1;

let circleSize = 50;
let circleX = 200;
let circleY = 200;
let circleColor = [255, 100, 100];
let showText = true;
let selectedMode = 'circle';

function setup() {
  createCanvas(400, 500);
  
  slider1 = createSlider(10, 200, 50, 1);
  slider1.position(20, 20);
  slider1.style('width', '200px');
  
  slider2 = createSlider(0, 400, 200, 1);
  slider2.position(20, 50);
  slider2.style('width', '200px');
  
  button1 = createButton('Change Color');
  button1.position(20, 80);
  button1.mousePressed(changeColor);
  
  checkbox1 = createCheckbox('Show Text', true);
  checkbox1.position(20, 110);
  
  select1 = createSelect();
  select1.position(20, 140);
  select1.option('circle');
  select1.option('square');
  select1.option('triangle');
  select1.changed(shapeChanged);
}

function draw() {
  background(220);
  
  circleSize = slider1.value();
  circleX = slider2.value();
  showText = checkbox1.checked();
  selectedMode = select1.value();
  
  fill(circleColor[0], circleColor[1], circleColor[2]);
  noStroke();
  
  if (selectedMode === 'circle') {
    ellipse(circleX, circleY, circleSize, circleSize);
  } else if (selectedMode === 'square') {
    rectMode(CENTER);
    rect(circleX, circleY, circleSize, circleSize);
  } else if (selectedMode === 'triangle') {
    triangle(
      circleX, circleY - circleSize/2,
      circleX - circleSize/2, circleY + circleSize/2,
      circleX + circleSize/2, circleY + circleSize/2
    );
  }
  
  if (showText) {
    fill(0);
    textAlign(CENTER);
    textSize(14);
    text('Size: ' + circleSize, width/2, height - 60);
    text('X Position: ' + circleX, width/2, height - 40);
    text('Mode: ' + selectedMode, width/2, height - 20);
  }
  
  fill(0);
  textAlign(LEFT);
  textSize(12);
  text('Size Slider', 240, 35);
  text('X Position Slider', 240, 65);
}

function changeColor() {
  circleColor[0] = random(100, 255);
  circleColor[1] = random(100, 255);
  circleColor[2] = random(100, 255);
}

function shapeChanged() {
}
