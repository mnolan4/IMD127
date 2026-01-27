// Coding Challenges Data
// Smaller practice challenges for students

const codingChallenges = [
    {
        id: "challenge-1",
        title: "Draw a House",
        difficulty: "beginner",
        week: 1,
        description: "Create a simple house using basic shapes: a rectangle for the base, a triangle for the roof, and a rectangle for the door.",
        requirements: [
            "Use rect() for the house base and door",
            "Use triangle() for the roof",
            "Add at least one window using rect()",
            "Use different colors for each part"
        ],
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(135, 206, 235); // Sky blue
  
  // Your code here!
  
}`,
        hint: "Start with the base rectangle, then add the triangle roof on top. Remember: triangle(x1, y1, x2, y2, x3, y3)",
        solution: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(135, 206, 235);
  
  // House base
  fill(200, 150, 100);
  rect(150, 250, 100, 100);
  
  // Roof
  fill(139, 69, 19);
  triangle(150, 250, 200, 200, 250, 250);
  
  // Door
  fill(101, 67, 33);
  rect(180, 300, 40, 50);
  
  // Window
  fill(173, 216, 230);
  rect(160, 270, 25, 25);
  rect(215, 270, 25, 25);
}`
    },
    {
        id: "challenge-2",
        title: "Animated Clock",
        difficulty: "beginner",
        week: 2,
        description: "Create a simple clock that shows the current time. Use hour(), minute(), and second() functions.",
        requirements: [
            "Draw a circular clock face",
            "Display hour, minute, and second hands",
            "Use map() to convert time to angles",
            "Make the clock update in real-time"
        ],
        starterCode: `function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  // Your code here!
  
}`,
        hint: "Use map() to convert time values to angles. For hours: map(hour() % 12, 0, 12, 0, 360). Remember to use push(), translate(), and pop() to rotate around the center.",
        solution: `function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  // Clock face
  fill(255);
  ellipse(200, 200, 300, 300);
  
  // Center point
  fill(0);
  ellipse(200, 200, 10, 10);
  
  // Hour hand
  push();
  translate(200, 200);
  rotate(map(hour() % 12, 0, 12, 0, 360) - 90);
  stroke(0);
  strokeWeight(4);
  line(0, 0, 0, -80);
  pop();
  
  // Minute hand
  push();
  translate(200, 200);
  rotate(map(minute(), 0, 60, 0, 360) - 90);
  stroke(0);
  strokeWeight(3);
  line(0, 0, 0, -120);
  pop();
  
  // Second hand
  push();
  translate(200, 200);
  rotate(map(second(), 0, 60, 0, 360) - 90);
  stroke(255, 0, 0);
  strokeWeight(2);
  line(0, 0, 0, -140);
  pop();
}`
    },
    {
        id: "challenge-3",
        title: "Interactive Color Mixer",
        difficulty: "intermediate",
        week: 3,
        description: "Create an interactive color mixer where moving the mouse changes RGB values. Display the current color and RGB values.",
        requirements: [
            "Use mouseX and mouseY to control color",
            "Display the mixed color as a shape",
            "Show RGB values as text",
            "Use map() to convert mouse position to 0-255 range"
        ],
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Your code here!
  
}`,
        hint: "Map mouseX to red, mouseY to green, and maybe use a combination for blue. Use map(value, 0, width, 0, 255) to convert positions to color values.",
        solution: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Map mouse position to RGB values
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, height, 0, 255);
  let b = map((mouseX + mouseY) / 2, 0, (width + height) / 2, 0, 255);
  
  // Draw color circle
  fill(r, g, b);
  noStroke();
  ellipse(200, 200, 200, 200);
  
  // Display RGB values
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("R: " + int(r), 20, 30);
  text("G: " + int(g), 20, 50);
  text("B: " + int(b), 20, 70);
}`
    },
    {
        id: "challenge-4",
        title: "Pattern Generator",
        difficulty: "intermediate",
        week: 4,
        description: "Create a grid pattern where each cell's color alternates based on its position using nested loops and modulo.",
        requirements: [
            "Use nested loops to create a grid",
            "Use modulo operator to alternate colors",
            "Make the pattern visually interesting",
            "Use at least 10x10 grid"
        ],
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Your code here!
  
}`,
        hint: "Use nested loops where the outer loop handles columns (x) and inner loop handles rows (y). Use (x + y) % 2 or similar to create a checkerboard pattern.",
        solution: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let gridSize = 20;
  let cellSize = width / gridSize;
  
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      // Alternate colors using modulo
      if ((x + y) % 2 == 0) {
        fill(255, 0, 0); // Red
      } else {
        fill(0, 0, 255); // Blue
      }
      
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}`
    },
    {
        id: "challenge-5",
        title: "Function-Based Pattern",
        difficulty: "intermediate",
        week: 5,
        description: "Create a reusable function that draws a pattern element, then use it multiple times to create a larger composition.",
        requirements: [
            "Create a function that draws a pattern element",
            "Use parameters for position, size, and color",
            "Call the function at least 5 times with different values",
            "Create an interesting composition"
        ],
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Your code here!
  
}`,
        hint: "Define a function like drawPattern(x, y, size, color) that draws your pattern element. Then call it multiple times in draw() with different parameters.",
        solution: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Call function multiple times
  drawPattern(100, 100, 50, color(255, 0, 0));
  drawPattern(300, 100, 50, color(0, 255, 0));
  drawPattern(200, 200, 50, color(0, 0, 255));
  drawPattern(100, 300, 50, color(255, 255, 0));
  drawPattern(300, 300, 50, color(255, 0, 255));
}

function drawPattern(x, y, size, col) {
  fill(col);
  ellipse(x, y, size, size);
  fill(255);
  ellipse(x, y, size * 0.6, size * 0.6);
  fill(col);
  ellipse(x, y, size * 0.3, size * 0.3);
}`
    },
    {
        id: "challenge-6",
        title: "Particle Rain",
        difficulty: "advanced",
        week: 6,
        description: "Create a particle system where particles fall from the top of the screen like rain. Use arrays to manage multiple particles.",
        requirements: [
            "Use an array to store particles",
            "Each particle should have position and speed",
            "Particles should fall downward",
            "Remove particles when they go off screen"
        ],
        starterCode: `let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Your code here!
  
}`,
        hint: "Create particle objects with x, y, and speedY properties. Add new particles to the array, update their positions, draw them, and remove ones that are off-screen using splice().",
        solution: `let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Add new particle at random x position
  if (frameCount % 5 == 0) {
    particles.push({
      x: random(width),
      y: 0,
      speedY: random(2, 5)
    });
  }
  
  // Update and draw particles
  for (let i = particles.length - 1; i >= 0; i--) {
    // Update position
    particles[i].y += particles[i].speedY;
    
    // Draw particle
    fill(0, 100, 255);
    ellipse(particles[i].x, particles[i].y, 5, 5);
    
    // Remove if off screen
    if (particles[i].y > height) {
      particles.splice(i, 1);
    }
  }
}`
    }
];











