// Load JSON
// Demonstrates loading and using JSON data
//
// JSON (JavaScript Object Notation) is a common data format.
// You can load external JSON files to use real data in your visualizations.
// This is essential for data visualization and working with APIs.

// Variable to store loaded data
let data;

// preload() runs BEFORE setup()
// Use it for loading files (images, data, sounds)
// Ensures files are loaded before code tries to use them
function preload() {
  // loadJSON() loads a JSON file from your project
  // Returns a JavaScript object/array you can use in your code
  data = loadJSON('data.json');
  
  // For p5.js web editor: Place 'data.json' in same folder as your sketch
  // For OpenProcessing: Write sketch, SAVE IT, then upload JSON via Assets panel
  // For external: Use full URL like 'https://example.com/data.json'
  
  // Example JSON structure might be:
  // { "name": "Value", "numbers": [1, 2, 3] }
  // or
  // [{ "x": 10, "y": 20 }, { "x": 30, "y": 40 }]
}

function setup() {
  createCanvas(400, 400);
  
  // Check what data was loaded
  // Use console.log(data) to see the data structure in the browser console
  
  // Access data properties:
  // If data is object: data.propertyName
  // If data is array: data[0], data[1], etc.
  // Example: console.log(data.name); or console.log(data[0].x);
}

function draw() {
  background(220);
  
  // Use data to create visualization
  // Example approaches:
  
  // If data is array of objects:
  // for (let i = 0; i < data.length; i++) {
  //   let value = data[i].someProperty;
  //   ellipse(i * 50, height - value, 40, value);
  // }
  
  // If data has nested structure:
  // ellipse(data.position.x, data.position.y, data.size, data.size);
  
  // HOW IT WORKS:
  // 1. preload() loads JSON file
  // 2. Data stored in 'data' variable
  // 3. Access data properties/array elements
  // 4. Use data values to create visualizations
  
  // NOTE: File must be in same folder or provide correct path
  // JSON files are text files with .json extension

