// Loading Images
// Demonstrates how to load and display image files in p5.js
//
// To use images in your sketch, you need to:
// 1. Declare a variable to store the image
// 2. Load the image in preload() function
// 3. Display the image using image() function
//
// IMPORTANT: Use preload() to load images - it ensures images are loaded
// before setup() runs. This prevents errors from trying to use images before they're ready.

// Declare a variable to store the image
// Use 'let' to create a variable that will hold the image object
let myImage;  // This variable will store the loaded image

// preload() runs BEFORE setup()
// This is where you load external files (images, sounds, data files)
// preload() ensures everything is loaded before your sketch starts
function preload() {
  // Load the image file
  // Replace 'your-image.jpg' with the actual filename of your image
  // Supported formats: JPG, PNG, GIF, SVG
  
  // METHOD 1: Local file (p5.js web editor or local setup)
  // The image file must be in the same folder as your sketch, or provide the full path
  myImage = loadImage('your-image.jpg');
  
  // METHOD 2: OpenProcessing.org
  // In OpenProcessing, you need to save your sketch first before uploading files:
  // 1. Write your sketch code (including the loadImage() line)
  // 2. Save your sketch (File > Save or Ctrl+S / Cmd+S)
  // 3. Click the "Assets" button in the top toolbar (folder icon)
  // 4. Click "Upload" and select your image file
  // 5. Once uploaded, use the filename exactly as it appears in the Assets panel
  // Example: myImage = loadImage('my-photo.png');
  // IMPORTANT: You must save your sketch before the Assets panel will work properly
  
  // METHOD 3: External URL (works in both p5.js editor and OpenProcessing)
  // You can load images from the internet using a full URL:
  // myImage = loadImage('https://example.com/path/to/image.jpg');
  
  // You can load multiple images:
  // let image2 = loadImage('another-image.png');
  // let backgroundImg = loadImage('background.jpg');
}

function setup() {
  createCanvas(400, 400);
  
  // Optional: Resize the image to fit your canvas
  // myImage.resize(width, height);  // Resize to canvas size
  // myImage.resize(200, 200);       // Resize to specific dimensions
}

function draw() {
  background(220);
  
  // Display the image using image() function
  // Syntax: image(imageVariable, x, y)
  // This draws the image at position (x, y)
  image(myImage, 0, 0);
  
  // You can also specify width and height:
  // image(myImage, 0, 0, width, height);  // Full canvas
  // image(myImage, 100, 100, 200, 200);   // Specific size at specific position
  
  // TIP: Use image.width and image.height to get the image dimensions
  // console.log('Image width:', myImage.width);
  // console.log('Image height:', myImage.height);
}

// COMMON PATTERNS:
// 1. Display image at original size: image(myImage, x, y);
// 2. Display image at specific size: image(myImage, x, y, width, height);
// 3. Center image: image(myImage, width/2 - myImage.width/2, height/2 - myImage.height/2);
// 4. Fill canvas with image: image(myImage, 0, 0, width, height);
