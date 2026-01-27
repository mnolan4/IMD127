// Basic Object
// Demonstrates creating and using objects
//
// Objects let you group related properties together.
// Instead of separate variables (circleX, circleY, circleDiameter, circleMoveSpeed),
// you can have one object with all properties. This organizes code better.

// OBJECT SYNTAX: { property1: value1, property2: value2, ... }
// Curly braces {} create an object
// Properties are name: value pairs, separated by commas
// myCircle is an object with 4 properties
let myCircle = {
  x: 200,           // Horizontal position
  y: 200,           // Vertical position
  diameter: 50,     // Diameter of circle
  moveSpeed: 2      // Movement speed
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Access object properties using dot notation: objectName.propertyName
  // Update object property: move circle to the right
  myCircle.x += myCircle.moveSpeed;
  // This is equivalent to: myCircle.x = myCircle.x + myCircle.moveSpeed

  // Draw circle using object properties
  // Access multiple properties: myCircle.x, myCircle.y, myCircle.diameter
  ellipse(myCircle.x, myCircle.y, myCircle.diameter, myCircle.diameter);
  
  // BENEFITS OF OBJECTS:
  // - Group related data together
  // - More organized than separate variables
  // - Easy to pass entire object to functions
  // - Clear relationship between properties
  // - Foundation for object-oriented programming
}

