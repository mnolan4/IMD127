// Scoring System - Simple Version
// Clean code without comments

let score = 0;
let lives = 3;
let highScore = 0;
let gameOver = false;

let player;
let collectibles = [];
let enemies = [];

function setup() {
  createCanvas(400, 500);
  
  player = {
    x: width/2,
    y: height - 50,
    diameter: 30
  };
  
  for (let i = 0; i < 5; i++) {
    collectibles.push({
      x: random(50, width - 50),
      y: random(100, height - 100),
      diameter: 20,
      collected: false
    });
  }
  
  for (let i = 0; i < 3; i++) {
    enemies.push({
      x: random(50, width - 50),
      y: random(100, height - 100),
      diameter: 25,
      vx: random(-2, 2),
      vy: random(-2, 2)
    });
  }
}

function draw() {
  background(30);
  
  if (!gameOver) {
    updateGame();
    drawGame();
  } else {
    drawGameOver();
  }
  
  drawUI();
}

function updateGame() {
  player.x = mouseX;
  player.y = mouseY;
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
      loseLife();
      enemy.x = random(50, width - 50);
      enemy.y = random(100, height - 100);
    }
  }
  
  for (let collectible of collectibles) {
    if (!collectible.collected) {
      let d = dist(player.x, player.y, collectible.x, collectible.y);
      if (d < player.diameter/2 + collectible.diameter/2) {
        collectible.collected = true;
        addScore(10);
        setTimeout(() => {
          collectible.x = random(50, width - 50);
          collectible.y = random(100, height - 100);
          collectible.collected = false;
        }, 1000);
      }
    }
  }
}

function drawGame() {
  fill(100, 150, 255);
  noStroke();
  ellipse(player.x, player.y, player.diameter, player.diameter);
  
  for (let collectible of collectibles) {
    if (!collectible.collected) {
      fill(255, 255, 100);
      ellipse(collectible.x, collectible.y, collectible.diameter, collectible.diameter);
    }
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
  text('High Score: ' + highScore, 10, 70);
  
  fill(255, 100, 100);
  for (let i = 0; i < lives; i++) {
    ellipse(width - 30 - i * 30, 20, 15, 15);
  }
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
  textSize(16);
  text('Click to Restart', width/2, height/2 + 50);
}

function addScore(points) {
  score += points;
  if (score > highScore) {
    highScore = score;
  }
  if (score % 100 === 0 && score > 0) {
    lives++;
  }
}

function loseLife() {
  lives--;
  if (lives <= 0) {
    gameOver = true;
  }
}

function resetGame() {
  score = 0;
  lives = 3;
  gameOver = false;
  player.x = width/2;
  player.y = height - 50;
  for (let c of collectibles) {
    c.collected = false;
    c.x = random(50, width - 50);
    c.y = random(100, height - 100);
  }
  for (let e of enemies) {
    e.x = random(50, width - 50);
    e.y = random(100, height - 100);
  }
}

function mousePressed() {
  if (gameOver) {
    resetGame();
  }
}
