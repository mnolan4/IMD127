// State Machine
// Demonstrates state management for interactive systems and games
//
// State machines organize your code into distinct phases or modes. Each state
// has its own behavior, drawing, and transitions. This is essential for creating
// structured interactive systems, games, and applications that go beyond simple
// animations.
//
// Common states: 'menu', 'playing', 'paused', 'gameOver', 'settings', etc.

// Current state of the system
let gameState = 'menu';  // Start in menu state

// Game variables (only used in 'playing' state)
let playerX = 200;
let playerY = 200;
let playerSize = 30;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // State machine: handle different states
  // Each state has its own drawing and behavior
  if (gameState === 'menu') {
    drawMenu();
  } else if (gameState === 'playing') {
    updateGame();   // Update game logic
    drawGame();     // Draw game elements
  } else if (gameState === 'paused') {
    drawGame();     // Show game in background
    drawPauseScreen();  // Draw pause overlay
  } else if (gameState === 'gameOver') {
    drawGame();     // Show final game state
    drawGameOverScreen();
  }
  
  // UI elements that appear in all states
  drawStateIndicator();
}

// MENU STATE
function drawMenu() {
  fill(0);
  textAlign(CENTER);
  textSize(32);
  text('My Game', width/2, height/2 - 40);
  
  textSize(16);
  text('Press SPACE to Start', width/2, height/2 + 20);
  text('Press ESC for Instructions', width/2, height/2 + 50);
  
  // Visual element for menu
  fill(100, 150, 255);
  ellipse(width/2, height/2 - 100, 50, 50);
}

// PLAYING STATE
function updateGame() {
  // Update game logic only when playing
  // Move player with arrow keys
  if (keyIsDown(LEFT_ARROW)) playerX -= 3;
  if (keyIsDown(RIGHT_ARROW)) playerX += 3;
  if (keyIsDown(UP_ARROW)) playerY -= 3;
  if (keyIsDown(DOWN_ARROW)) playerY += 3;
  
  // Keep player on canvas
  playerX = constrain(playerX, playerSize/2, width - playerSize/2);
  playerY = constrain(playerY, playerSize/2, height - playerSize/2);
}

function drawGame() {
  // Draw game elements
  fill(255, 100, 100);
  noStroke();
  ellipse(playerX, playerY, playerSize, playerSize);
  
  // Draw some game elements
  fill(100, 255, 100);
  for (let i = 0; i < 5; i++) {
    ellipse(i * 80 + 40, 50, 20, 20);
  }
}

// PAUSED STATE
function drawPauseScreen() {
  // Semi-transparent overlay
  fill(0, 150);
  rect(0, 0, width, height);
  
  // Pause text
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text('PAUSED', width/2, height/2 - 20);
  textSize(16);
  text('Press SPACE to Resume', width/2, height/2 + 20);
}

// GAME OVER STATE
function drawGameOverScreen() {
  // Semi-transparent overlay
  fill(0, 200);
  rect(0, 0, width, height);
  
  // Game over text
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(32);
  text('GAME OVER', width/2, height/2 - 20);
  textSize(16);
  fill(255);
  text('Press SPACE to Restart', width/2, height/2 + 20);
  text('Press ESC for Menu', width/2, height/2 + 50);
}

// UI: Show current state
function drawStateIndicator() {
  fill(0);
  textAlign(LEFT);
  textSize(12);
  text('State: ' + gameState, 10, 20);
}

// STATE TRANSITIONS
function keyPressed() {
  // Handle state transitions based on key presses
  
  if (key === ' ') {  // SPACE key
    if (gameState === 'menu') {
      // Transition: menu → playing
      gameState = 'playing';
      resetGame();  // Initialize game
    } else if (gameState === 'playing') {
      // Transition: playing → paused
      gameState = 'paused';
    } else if (gameState === 'paused') {
      // Transition: paused → playing
      gameState = 'playing';
    } else if (gameState === 'gameOver') {
      // Transition: gameOver → playing
      gameState = 'playing';
      resetGame();  // Reset game
    }
  }
  
  if (keyCode === ESCAPE) {
    if (gameState === 'playing' || gameState === 'paused') {
      // Transition: playing/paused → menu
      gameState = 'menu';
    } else if (gameState === 'gameOver') {
      // Transition: gameOver → menu
      gameState = 'menu';
    }
    return false;  // Prevent default ESC behavior
  }
}

// Initialize/reset game
function resetGame() {
  playerX = width/2;
  playerY = height/2;
  // Reset any other game variables
}

// KEY CONCEPTS:
// 1. State machine organizes code into distinct phases
// 2. Each state has its own drawing and update logic
// 3. State transitions happen in response to events (key presses, collisions, etc.)
// 4. Only update/draw relevant code for current state
// 5. States prevent code from running at wrong times
//
// COMMON PATTERNS:
// - Menu → Playing → Paused → Playing → Game Over → Menu
// - Use if/else or switch statements to handle states
// - Separate functions for each state's drawing
// - State transitions in event handlers (keyPressed, mousePressed, etc.)
//
// BENEFITS:
// - Clear organization
// - Easy to add new states
// - Prevents bugs from code running in wrong state
// - Makes interactive systems more intentional and structured
