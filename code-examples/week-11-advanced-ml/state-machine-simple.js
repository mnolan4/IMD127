// State Machine - Simple Version
// Clean code without comments

let gameState = 'menu';

let playerX = 200;
let playerY = 200;
let playerSize = 30;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if (gameState === 'menu') {
    drawMenu();
  } else if (gameState === 'playing') {
    updateGame();
    drawGame();
  } else if (gameState === 'paused') {
    drawGame();
    drawPauseScreen();
  } else if (gameState === 'gameOver') {
    drawGame();
    drawGameOverScreen();
  }
  
  drawStateIndicator();
}

function drawMenu() {
  fill(0);
  textAlign(CENTER);
  textSize(32);
  text('My Game', width/2, height/2 - 40);
  textSize(16);
  text('Press SPACE to Start', width/2, height/2 + 20);
  fill(100, 150, 255);
  ellipse(width/2, height/2 - 100, 50, 50);
}

function updateGame() {
  if (keyIsDown(LEFT_ARROW)) playerX -= 3;
  if (keyIsDown(RIGHT_ARROW)) playerX += 3;
  if (keyIsDown(UP_ARROW)) playerY -= 3;
  if (keyIsDown(DOWN_ARROW)) playerY += 3;
  playerX = constrain(playerX, playerSize/2, width - playerSize/2);
  playerY = constrain(playerY, playerSize/2, height - playerSize/2);
}

function drawGame() {
  fill(255, 100, 100);
  noStroke();
  ellipse(playerX, playerY, playerSize, playerSize);
  fill(100, 255, 100);
  for (let i = 0; i < 5; i++) {
    ellipse(i * 80 + 40, 50, 20, 20);
  }
}

function drawPauseScreen() {
  fill(0, 150);
  rect(0, 0, width, height);
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text('PAUSED', width/2, height/2 - 20);
  textSize(16);
  text('Press SPACE to Resume', width/2, height/2 + 20);
}

function drawGameOverScreen() {
  fill(0, 200);
  rect(0, 0, width, height);
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(32);
  text('GAME OVER', width/2, height/2 - 20);
  textSize(16);
  fill(255);
  text('Press SPACE to Restart', width/2, height/2 + 20);
}

function drawStateIndicator() {
  fill(0);
  textAlign(LEFT);
  textSize(12);
  text('State: ' + gameState, 10, 20);
}

function keyPressed() {
  if (key === ' ') {
    if (gameState === 'menu') {
      gameState = 'playing';
      resetGame();
    } else if (gameState === 'playing') {
      gameState = 'paused';
    } else if (gameState === 'paused') {
      gameState = 'playing';
    } else if (gameState === 'gameOver') {
      gameState = 'playing';
      resetGame();
    }
  }
  
  if (keyCode === ESCAPE) {
    if (gameState === 'playing' || gameState === 'paused') {
      gameState = 'menu';
    } else if (gameState === 'gameOver') {
      gameState = 'menu';
    }
    return false;  // Prevent default ESC behavior
  }
}

function resetGame() {
  playerX = width/2;
  playerY = height/2;
}
