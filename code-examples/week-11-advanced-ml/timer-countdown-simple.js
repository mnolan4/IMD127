// Timer and Countdown - Simple Version
// Clean code without comments

let gameTime = 0;
let timeLimit = 600;
let countdown = 10;
let countdownActive = false;
let delayTimer = 0;
let delayDuration = 120;

let gameStarted = false;
let gamePaused = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if (gameStarted && !gamePaused) {
    updateTimers();
  }
  
  drawGame();
  drawTimers();
  checkTimeConditions();
}

function updateTimers() {
  gameTime++;
  
  if (countdownActive && countdown > 0) {
    if (frameCount % 60 === 0) {
      countdown--;
    }
  }
  
  if (delayTimer < delayDuration) {
    delayTimer++;
  }
}

function drawGame() {
  fill(100, 150, 255);
  ellipse(200, 200, 100, 100);
  
  if (delayTimer < delayDuration) {
    fill(255, 200, 0, 150);
    rect(0, 0, map(delayTimer, 0, delayDuration, 0, width), 10);
  }
}

function drawTimers() {
  fill(0);
  textAlign(LEFT);
  textSize(14);
  
  let seconds = floor(gameTime / 60);
  let milliseconds = floor((gameTime % 60) / 6);
  text('Game Time: ' + nf(seconds, 2) + ':' + nf(milliseconds, 2), 10, 30);
  
  let timeRemaining = timeLimit - gameTime;
  let secondsRemaining = floor(timeRemaining / 60);
  if (timeRemaining > 0) {
    text('Time Remaining: ' + secondsRemaining + 's', 10, 50);
  } else {
    text('Time\'s Up!', 10, 50);
  }
  
  if (countdownActive) {
    textAlign(CENTER);
    textSize(48);
    if (countdown > 0) {
      fill(255, 100, 100);
      text(countdown, width/2, height/2);
    } else {
      fill(0, 255, 0);
      text('GO!', width/2, height/2);
    }
    textAlign(LEFT);
  }
  
  if (delayTimer < delayDuration) {
    textSize(12);
    text('Waiting... ' + floor((delayDuration - delayTimer) / 60) + 's', 10, 70);
  }
}

function checkTimeConditions() {
  if (gameTime >= timeLimit) {
    fill(255, 0, 0, 150);
    rect(0, 0, width, height);
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text('TIME\'S UP!', width/2, height/2);
  }
  
  if (delayTimer >= delayDuration && delayTimer < delayDuration + 1) {
    // Add your code here for when the delay completes
  }
}

function keyPressed() {
  if (key === ' ') {
    if (!gameStarted) {
      gameStarted = true;
      countdownActive = true;
      countdown = 3;
    } else {
      gamePaused = !gamePaused;
    }
  }
  
  if (key === 'r' || key === 'R') {
    resetTimers();
  }
}

function resetTimers() {
  gameTime = 0;
  countdown = 10;
  countdownActive = false;
  delayTimer = 0;
  gameStarted = false;
  gamePaused = false;
}
