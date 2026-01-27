// Simple Game - Simple Version
// Clean code without comments

let gameState = 'menu';

let score = 0;
let lives = 3;
let highScore = 0;

let gameTime = 0;
let timeLimit = 600;

let player;
let items = [];
let enemies = [];

function setup() {
  createCanvas(400, 500);
  
  player = {
    x: width/2,
    y: height - 50,
    diameter: 25,
    moveSpeed: 4
  };
  
  resetGame();
}

function draw() {
  background(30);
  
  if (gameState === 'menu') {
    drawMenu();
  } else if (gameState === 'playing') {
    updateGame();
    drawGame();
    drawUI();
    
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
  if (highScore > 0) {
    fill(255, 255, 100);
    textSize(14);
    text('High Score: ' + highScore, width/2, height/2 + 110);
  }
}

function updateGame() {
  gameTime++;
  
  if (keyIsDown(LEFT_ARROW)) player.x -= player.moveSpeed;
  if (keyIsDown(RIGHT_ARROW)) player.x += player.moveSpeed;
  if (keyIsDown(UP_ARROW)) player.y -= player.moveSpeed;
  if (keyIsDown(DOWN_ARROW)) player.y += player.moveSpeed;
  
  player.x = constrain(player.x, player.diameter/2, width - player.diameter/2);
  player.y = constrain(player.y, player.diameter/2, height - player.diameter/2);
  
  for (let enemy of enemies) {
    enemy.x += enemy.vx;
    enemy.y += enemy.vy;
    
    if (enemy.x < enemy.diameter/2 || enemy.x > width - enemy.diameter/2) {
      enemy.vx *= -1;
    }
    if (enemy.y < enemy.diameter/2 || enemy.y > height - enemy.diameter/2) {
      enemy.vy *= -1;
    }
    
    let d = dist(player.x, player.y, enemy.x, enemy.y);
    if (d < player.diameter/2 + enemy.diameter/2) {
      lives--;
      enemy.x = random(50, width - 50);
      enemy.y = random(50, height - 100);
      enemy.vx = random(-3, 3);
      enemy.vy = random(-3, 3);
    }
  }
  
  for (let i = items.length - 1; i >= 0; i--) {
    let item = items[i];
    let d = dist(player.x, player.y, item.x, item.y);
    if (d < player.diameter/2 + item.diameter/2) {
      score += 10;
      items.splice(i, 1);
      spawnItem();
    }
  }
  
  if (frameCount % 120 === 0 && items.length < 5) {
    spawnItem();
  }
}

function drawGame() {
  fill(100, 150, 255);
  noStroke();
  ellipse(player.x, player.y, player.diameter, player.diameter);
  
  for (let item of items) {
    fill(100, 255, 100);
    ellipse(item.x, item.y, item.diameter, item.diameter);
  }
  
  for (let enemy of enemies) {
    fill(255, 100, 100);
    ellipse(enemy.x, enemy.y, enemy.diameter, enemy.diameter);
  }
}

function drawUI() {
  fill(255);
  textAlign(LEFT);
  textSize(16);
  text('Score: ' + score, 10, 30);
  text('Lives: ' + lives, 10, 50);
  let timeRemaining = floor((timeLimit - gameTime) / 60);
  if (timeRemaining > 0) {
    text('Time: ' + timeRemaining + 's', 10, 70);
  } else {
    text('Time: 0s', 10, 70);
  }
  
  fill(255, 100, 100);
  for (let i = 0; i < lives; i++) {
    ellipse(width - 30 - i * 30, 20, 15, 15);
  }
  
  let timePercent = (timeLimit - gameTime) / timeLimit;
  fill(100, 255, 100);
  rect(10, height - 30, (width - 20) * timePercent, 20);
}

function drawGameOver() {
  fill(0, 200);
  rect(0, 0, width, height);
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

function resetGame() {
  score = 0;
  lives = 3;
  gameTime = 0;
  player.x = width/2;
  player.y = height - 50;
  items = [];
  for (let i = 0; i < 3; i++) {
    spawnItem();
  }
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
