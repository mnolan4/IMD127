// Simple Game
// Complete simple game combining state machine, collision detection, scoring, and timers
//
// This example demonstrates how all the core concepts come together to create
// a complete interactive game. It shows state machines, collision detection,
// scoring systems, and timers working together to create playfulness and intentionality.
//
// Game: Collect items while avoiding enemies within a time limit!

// STATE MACHINE
let gameState = 'menu';  // 'menu', 'playing', 'gameOver'

// SCORING SYSTEM
let score = 0;
let lives = 3;
let highScore = 0;

// TIMER
let gameTime = 0;
let timeLimit = 600;  // 10 seconds at 60fps

// GAME OBJECTS
let player;
let items = [];
let enemies = [];

function setup() {
  createCanvas(400, 500);
  
  // Initialize player
  player = {
    x: width/2,
    y: height - 50,
    diameter: 25,
    moveSpeed: 4
  };
  
  // Initialize game objects
  resetGame();
}

function draw() {
  background(30);
  
  // STATE MACHINE
  if (gameState === 'menu') {
    drawMenu();
  } else if (gameState === 'playing') {
    updateGame();
    drawGame();
    drawUI();
    
    // Check game over conditions
    if (lives <= 0 || gameTime >= timeLimit) {
      gameState = 'gameOver';
      if (score > highScore) {
        highScore = score;
      }
    }
  } else if (gameState === 'gameOver') {
    drawGame();
    drawGameOver();
  }
}

// MENU STATE
function drawMenu() {
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text('Collect Game', width/2, height/2 - 60);
  
  textSize(16);
  text('Collect green items (+10 points)', width/2, height/2 - 20);
  text('Avoid red enemies (-1 life)', width/2, height/2 + 10);
  text('Time limit: 10 seconds', width/2, height/2 + 40);
  
  textSize(20);
  fill(100, 255, 100);
  text('Press SPACE to Start', width/2, height/2 + 80);
  
  // Show high score
  if (highScore > 0) {
    fill(255, 255, 100);
    textSize(14);
    text('High Score: ' + highScore, width/2, height/2 + 110);
  }
}

// PLAYING STATE
function updateGame() {
  // Update timer
  gameTime++;
  
  // Move player with arrow keys
  if (keyIsDown(LEFT_ARROW)) player.x -= player.moveSpeed;
  if (keyIsDown(RIGHT_ARROW)) player.x += player.moveSpeed;
  if (keyIsDown(UP_ARROW)) player.y -= player.moveSpeed;
  if (keyIsDown(DOWN_ARROW)) player.y += player.moveSpeed;
  
  // Keep player on canvas
  player.x = constrain(player.x, player.diameter/2, width - player.diameter/2);
  player.y = constrain(player.y, player.diameter/2, height - player.diameter/2);
  
  // Update enemies
  for (let enemy of enemies) {
    enemy.x += enemy.vx;
    enemy.y += enemy.vy;
    
    // Bounce off walls
    if (enemy.x < enemy.diameter/2 || enemy.x > width - enemy.diameter/2) {
      enemy.vx *= -1;
    }
    if (enemy.y < enemy.diameter/2 || enemy.y > height - enemy.diameter/2) {
      enemy.vy *= -1;
    }
    
    // COLLISION DETECTION: Player vs Enemy
    let d = dist(player.x, player.y, enemy.x, enemy.y);
    if (d < player.diameter/2 + enemy.diameter/2) {
      // Collision! Lose a life
      lives--;
      // Move enemy away
      enemy.x = random(50, width - 50);
      enemy.y = random(50, height - 100);
      // Prevent multiple collisions
      enemy.vx = random(-3, 3);
      enemy.vy = random(-3, 3);
    }
  }
  
  // Update items
  for (let i = items.length - 1; i >= 0; i--) {
    let item = items[i];
    
    // COLLISION DETECTION: Player vs Item
    let d = dist(player.x, player.y, item.x, item.y);
    if (d < player.diameter/2 + item.diameter/2) {
      // Collect item - add score
      score += 10;
      // Remove item
      items.splice(i, 1);
      // Spawn new item
      spawnItem();
    }
  }
  
  // Spawn new items periodically
  if (frameCount % 120 === 0 && items.length < 5) {
    spawnItem();
  }
}

function drawGame() {
  // Draw player
  fill(100, 150, 255);
  noStroke();
  ellipse(player.x, player.y, player.diameter, player.diameter);
  
  // Draw items (collectibles)
  for (let item of items) {
    fill(100, 255, 100);
    ellipse(item.x, item.y, item.diameter, item.diameter);
  }
  
  // Draw enemies
  for (let enemy of enemies) {
    fill(255, 100, 100);
    ellipse(enemy.x, enemy.y, enemy.diameter, enemy.diameter);
  }
}

function drawUI() {
  // Score and lives
  fill(255);
  textAlign(LEFT);
  textSize(16);
  text('Score: ' + score, 10, 30);
  text('Lives: ' + lives, 10, 50);
  
  // Time remaining
  let timeRemaining = floor((timeLimit - gameTime) / 60);
  if (timeRemaining > 0) {
    text('Time: ' + timeRemaining + 's', 10, 70);
  } else {
    text('Time: 0s', 10, 70);
  }
  
  // Draw lives as hearts
  fill(255, 100, 100);
  for (let i = 0; i < lives; i++) {
    ellipse(width - 30 - i * 30, 20, 15, 15);
  }
  
  // Time bar
  let timePercent = (timeLimit - gameTime) / timeLimit;
  fill(100, 255, 100);
  rect(10, height - 30, (width - 20) * timePercent, 20);
}

function drawGameOver() {
  // Semi-transparent overlay
  fill(0, 200);
  rect(0, 0, width, height);
  
  // Game over text
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(32);
  text('GAME OVER', width/2, height/2 - 60);
  
  fill(255);
  textSize(20);
  text('Final Score: ' + score, width/2, height/2 - 20);
  text('High Score: ' + highScore, width/2, height/2 + 10);
  
  if (lives <= 0) {
    text('Out of Lives!', width/2, height/2 + 40);
  } else {
    text('Time\'s Up!', width/2, height/2 + 40);
  }
  
  textSize(16);
  text('Press SPACE to Play Again', width/2, height/2 + 80);
}

// GAME FUNCTIONS
function resetGame() {
  score = 0;
  lives = 3;
  gameTime = 0;
  
  // Reset player
  player.x = width/2;
  player.y = height - 50;
  
  // Clear and respawn items
  items = [];
  for (let i = 0; i < 3; i++) {
    spawnItem();
  }
  
  // Clear and respawn enemies
  enemies = [];
  for (let i = 0; i < 3; i++) {
    enemies.push({
      x: random(50, width - 50),
      y: random(50, height - 100),
      diameter: 20,
      vx: random(-2, 2),
      vy: random(-2, 2)
    });
  }
}

function spawnItem() {
  items.push({
    x: random(30, width - 30),
    y: random(30, height - 100),
    diameter: 15
  });
}

// STATE TRANSITIONS
function keyPressed() {
  if (key === ' ') {
    if (gameState === 'menu') {
      gameState = 'playing';
      resetGame();
    } else if (gameState === 'gameOver') {
      gameState = 'playing';
      resetGame();
    }
  }
}

// KEY CONCEPTS DEMONSTRATED:
// 1. STATE MACHINE: Menu → Playing → Game Over
// 2. SCORING SYSTEM: Track score, lives, high score
// 3. TIMER: Time limit creates urgency
// 4. COLLISION DETECTION: Player vs items, player vs enemies
// 5. GAME OBJECTS: Organize game elements
// 6. INTENTIONALITY: Clear goals (collect items, avoid enemies, beat time limit)
// 7. PLAYFULNESS: Engaging interaction with purpose
//
// This combines all the core concepts into a complete, playable game that
// demonstrates the difference between simple interactivity and intentional,
// playful systems.
