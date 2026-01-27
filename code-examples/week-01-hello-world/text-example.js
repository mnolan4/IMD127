// Text Example
// Demonstrates how to display text on the canvas with different sizes, colors, alignments, and styles
//
// Key functions:
// - text("string", x, y) - Display text at position (x, y)
// - textSize(size) - Set the font size
// - textAlign(alignment) - Set text alignment (LEFT, CENTER, RIGHT)
// - fill(r, g, b) - Set text fill color
// - stroke(r, g, b) - Set text outline color
// - strokeWeight(weight) - Set outline thickness

function setup() {
  // Create a 400 x 400 pixel canvas
  createCanvas(400, 400);
	
  // Set background color to light gray
  background(220);

  // LEFT ALIGNED TEXT (default alignment)
  // Set text alignment to LEFT (text starts at the x position)
  textAlign(LEFT);
  // Display "Hello World" at position (20, 50) using default text size and color
  text("Hello World", 20, 50);
  
  // TEXT SIZE
  // Set font size to 32 pixels
  // Note: textSize() affects all text drawn after it until changed
  textSize(32);
  // Display "Creative" at position (150, 100) with size 32
  text("Creative", 150, 100);
  
  // TEXT COLOR
  // Set fill color to red (RGB: 255, 0, 0)
  fill(255, 0, 0);
  // Change text size to 24 pixels
  textSize(24);
  // Display "Coding" in red at position (150, 150)
  text("Coding", 150, 150);
  
  // CENTER ALIGNED TEXT
  // Set text alignment to CENTER (text is centered at the x position)
  textAlign(CENTER);
  // Set fill color to blue (RGB: 0, 0, 255)
  fill(0, 0, 255);
  // Set text size to 40 pixels
  textSize(40);
  // Display "Center Blue Text" centered horizontally at width/2 (middle of canvas)
  // Positioned at y = 250 (below center)
  text("Center Blue Text", width/2, 250);
  
  // RIGHT ALIGNED TEXT
  // Set text alignment to RIGHT (text ends at the x position)
  textAlign(RIGHT);
  // Set fill color to green (RGB: 0, 255, 0)
  fill(0, 255, 0);
  // Set text size to 20 pixels
  textSize(20);
  // Display "Right Aligned Green Text" aligned to the right edge
  // Positioned at x = width - 20 (20 pixels from right edge) and y = 300
  text("Right Aligned Green Text", width - 20, 300);
  
  // TEXT WITH OUTLINE (STROKE)
  // Set text alignment back to CENTER
  textAlign(CENTER);
  // Set fill color to white (RGB: 255, 255, 255)
  fill(255);
  // Set stroke (outline) color to black (RGB: 0, 0, 0)
  stroke(0);
  // Set stroke weight (outline thickness) to 4 pixels
  strokeWeight(4);
  // Set text size to 36 pixels
  textSize(36);
  // Display "Outlined White Text" centered horizontally with white fill and black outline
  // Positioned at y = 350 (near bottom of canvas)
  text("Outlined White Text", width/2, 350);
}

// KEY CONCEPTS:
// 1. textAlign() affects how text is positioned relative to the x coordinate:
//    - LEFT: text starts at x
//    - CENTER: text is centered at x
//    - RIGHT: text ends at x
//
// 2. textSize() sets the font size in pixels and affects all subsequent text
//
// 3. fill() sets the text color (RGB values 0-255)
//
// 4. stroke() and strokeWeight() add an outline to text
//    - Use stroke(0) to turn on outline, stroke(0, 0, 0, 0) or noStroke() to turn off
//
// 5. width and height are built-in variables that give you the canvas dimensions
//    - width/2 is the horizontal center
//    - height/2 is the vertical center
