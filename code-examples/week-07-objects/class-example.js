// Class Example
// Demonstrates creating classes and instances
//
// Classes are templates for creating objects. They define what properties
// and methods (functions) objects of that type will have. You create
// instances (individual objects) from the class template.

// CLASS DEFINITION
// class ClassName { ... }
// Classes define a template for creating objects
class Circle {
  // CONSTRUCTOR: special function that runs when object is created
  // Parameters receive values when creating new instance
  constructor(x, y, diameter) {
    // 'this' refers to the specific instance being created
    // Set properties for this instance
    this.x = x;                    // Store x position
    this.y = y;                    // Store y position
    this.diameter = diameter;      // Store diameter
    this.moveSpeed = random(1, 3); // Random speed for each circle
  }

  // METHOD: function that belongs to the class
  // Methods define what objects can do
  display() {
    // Draw this circle using its properties
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  // Another method: move the circle
  move() {
    // Move circle to the right
    this.x += this.moveSpeed;
    
    // Wrap around: if off right edge, move to left edge
    if (this.x > width) {
      this.x = 0;
    }
  }
}

// Array to store multiple circle instances
let circles = [];

function setup() {
  createCanvas(400, 400);
  
  // Create multiple instances using 'new' keyword
  // new ClassName(...) creates a new object from the class
  // Each instance is independent with its own properties
  for (let i = 0; i < 5; i++) {
    // Create new Circle instance with different starting positions
    // i * 80 + 40 spaces them horizontally
    circles.push(new Circle(i * 80 + 40, 200, 30));
  }
  // Now circles array contains 5 Circle objects, each with its own x, y, diameter, moveSpeed
}

function draw() {
  background(220);
  
  // Update and display all circles
  // 'for...of' loop: easier way to loop through array
  // For each circle in the circles array:
  for (let circle of circles) {
    // Call methods on each circle instance
    circle.move();      // Move this circle
    circle.display();   // Draw this circle
  }
  
  // HOW IT WORKS:
  // - Class defines template (properties and methods)
  // - Constructor creates instances with initial values
  // - Methods operate on instance properties (this.x, this.y)
  // - Each instance is independent (different x, y, moveSpeed)
  
  // BENEFITS OF CLASSES:
  // - Reusable template for creating similar objects
  // - Methods organize behavior with data
  // - Easy to create many instances
  // - Each instance maintains its own state
  // - Foundation for complex systems
}

