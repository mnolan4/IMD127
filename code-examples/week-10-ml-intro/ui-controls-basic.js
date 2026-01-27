// UI Controls Basic
// Demonstrates basic UI controls in p5.js: sliders, buttons, and checkboxes
//
// p5.js provides built-in UI controls that make it easy to create interactive interfaces.
// This example shows how to create and use sliders, buttons, and checkboxes to
// control your creative coding projects.
//
// UI controls are created in setup() and automatically handle user interaction.
// You read their values in draw() or in event handlers.

// Variables to store UI controls
let slider1;      // Slider for controlling a value
let slider2;      // Another slider
let button1;      // Button for triggering actions
let checkbox1;    // Checkbox for toggling boolean values
let select1;      // Dropdown menu for selecting options

// Variables controlled by UI
let circleSize = 50;
let circleX = 200;
let circleY = 200;
let circleColor = [255, 100, 100];  // RGB color array
let showText = true;
let selectedMode = 'circle';

function setup() {
  createCanvas(400, 500);
  
  // Create a slider
  // createSlider(min, max, [value], [step])
  // min: minimum value
  // max: maximum value
  // value: starting value (optional, defaults to middle)
  // step: increment size (optional, defaults to 1)
  slider1 = createSlider(10, 200, 50, 1);
  slider1.position(20, 20);
  slider1.style('width', '200px');
  
  // Create another slider for X position
  slider2 = createSlider(0, 400, 200, 1);
  slider2.position(20, 50);
  slider2.style('width', '200px');
  
  // Create a button
  // createButton(label)
  // label: text displayed on button
  button1 = createButton('Change Color');
  button1.position(20, 80);
  button1.mousePressed(changeColor);  // Call function when clicked
  
  // Create a checkbox
  // createCheckbox(label, [checked])
  // label: text displayed next to checkbox
  // checked: initial state (optional, defaults to false)
  checkbox1 = createCheckbox('Show Text', true);
  checkbox1.position(20, 110);
  
  // Create a dropdown/select menu
  // createSelect()
  // Then add options with .option()
  select1 = createSelect();
  select1.position(20, 140);
  select1.option('circle');
  select1.option('square');
  select1.option('triangle');
  select1.changed(shapeChanged);  // Call function when selection changes
}

function draw() {
  background(220);
  
  // Read slider values
  // .value() returns the current slider value as a number
  circleSize = slider1.value();
  circleX = slider2.value();
  
  // Read checkbox state
  // .checked returns true or false
  showText = checkbox1.checked();
  
  // Read select menu value
  // .value() returns the selected option as a string
  selectedMode = select1.value();
  
  // Draw shape based on selected mode
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
  
  // Display text if checkbox is checked
  if (showText) {
    fill(0);
    textAlign(CENTER);
    textSize(14);
    text('Size: ' + circleSize, width/2, height - 60);
    text('X Position: ' + circleX, width/2, height - 40);
    text('Mode: ' + selectedMode, width/2, height - 20);
  }
  
  // Display UI control labels
  fill(0);
  textAlign(LEFT);
  textSize(12);
  text('Size Slider', 240, 35);
  text('X Position Slider', 240, 65);
}

// Function called when button is clicked
function changeColor() {
  // Generate random RGB values
  circleColor[0] = random(100, 255);
  circleColor[1] = random(100, 255);
  circleColor[2] = random(100, 255);
}

// Function called when dropdown selection changes
function shapeChanged() {
  // This function is called automatically when user selects a different option
  // The selectedMode variable is already updated by select1.value() in draw()
}

// KEY CONCEPTS:
// 1. UI controls are created in setup(), not draw()
// 2. Use .value() to read slider and select values
// 3. Use .checked to read checkbox state
// 4. Use .mousePressed() to attach functions to buttons
// 5. Use .changed() to attach functions to select menus
// 6. Controls automatically handle user interaction - you just read their values
//
// COMMON PATTERNS:
// - Sliders for continuous values (size, position, color, etc.)
// - Buttons for discrete actions (reset, change mode, etc.)
// - Checkboxes for boolean toggles (show/hide, enable/disable)
// - Select menus for choosing from multiple options
