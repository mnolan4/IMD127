// Timer and Countdown
// Demonstrates implementing timers and countdown mechanics
//
// Timers add urgency, structure, and constraints to interactive systems.
// They can create time limits, countdowns, delays, and time-based events.
// This example shows different timer patterns used in games and interactive systems.

// Timer variables
let gameTime = 0;        // Elapsed game time (in frames)
let timeLimit = 600;     // Time limit in frames (10 seconds at 60fps)
let countdown = 10;      // Countdown timer (seconds)
let countdownActive = false;
let delayTimer = 0;      // Delay before something happens
let delayDuration = 120;  // 2 seconds delay

// Game state
let gameStarted = false;
let gamePaused = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Update timers
  if (gameStarted && !gamePaused) {
    updateTimers();
  }
  
  drawGame();
  drawTimers();
  
  // Check time-based conditions
  checkTimeConditions();
}

function updateTimers() {
  // Increment game time
  gameTime++;
  
  // Countdown timer (decreases)
  if (countdownActive && countdown > 0) {
    // Update countdown every 60 frames (1 second)
    if (frameCount % 60 === 0) {
      countdown--;
    }
  }
  
  // Delay timer (increases until duration)
  if (delayTimer < delayDuration) {
    delayTimer++;
  }
}

function drawGame() {
  // Draw game elements
  fill(100, 150, 255);
  ellipse(200, 200, 100, 100);
  
  // Show delay indicator
  if (delayTimer < delayDuration) {
    fill(255, 200, 0, 150);
    rect(0, 0, map(delayTimer, 0, delayDuration, 0, width), 10);
  }
}

function drawTimers() {
  fill(0);
  textAlign(LEFT);
  textSize(14);
  
  // Display game time (convert frames to seconds)
  let seconds = floor(gameTime / 60);
  let milliseconds = floor((gameTime % 60) / 6);
  text('Game Time: ' + nf(seconds, 2) + ':' + nf(milliseconds, 2), 10, 30);
  
  // Display time remaining
  let timeRemaining = timeLimit - gameTime;
  let secondsRemaining = floor(timeRemaining / 60);
  if (timeRemaining > 0) {
    text('Time Remaining: ' + secondsRemaining + 's', 10, 50);
  } else {
    text('Time\'s Up!', 10, 50);
  }
  
  // Display countdown
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
  
  // Display delay status
  if (delayTimer < delayDuration) {
    textSize(12);
    text('Waiting... ' + floor((delayDuration - delayTimer) / 60) + 's', 10, 70);
  }
}

function checkTimeConditions() {
  // Time limit reached
  if (gameTime >= timeLimit) {
    // Game over - time's up
    fill(255, 0, 0, 150);
    rect(0, 0, width, height);
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text('TIME\'S UP!', width/2, height/2);
  }
  
  // Countdown finished
  if (countdownActive && countdown <= 0 && frameCount % 60 === 0) {
    // Countdown reached zero - do something
    // This happens once per second when countdown is 0
  }
  
  // Delay finished
  if (delayTimer >= delayDuration && delayTimer < delayDuration + 1) {
    // Delay just finished - do something once
    // Add your code here for when the delay completes
  }
}

function keyPressed() {
  if (key === ' ') {
    if (!gameStarted) {
      // Start game and countdown
      gameStarted = true;
      countdownActive = true;
      countdown = 3;  // 3 second countdown
    } else {
      // Toggle pause
      gamePaused = !gamePaused;
    }
  }
  
  if (key === 'r' || key === 'R') {
    // Reset timers
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

// HELPER FUNCTIONS FOR TIMERS

// Convert frames to seconds
function framesToSeconds(frames) {
  return frames / 60.0;
}

// Convert seconds to frames
function secondsToFrames(seconds) {
  return seconds * 60;
}

// Check if timer has elapsed
function timerElapsed(startTime, duration) {
  return (frameCount - startTime) >= duration;
}

// Get time remaining
function timeRemaining(startTime, duration) {
  let elapsed = frameCount - startTime;
  return max(0, duration - elapsed);
}

// KEY CONCEPTS:
// 1. Timers track elapsed time or count down
// 2. Use frameCount or custom counters to track time
// 3. Convert between frames and seconds (60 fps = 1 second)
// 4. Timers create urgency and structure
// 5. Time-based conditions create game mechanics
//
// COMMON PATTERNS:
// - Countdown: Decrease timer, do something when it reaches 0
// - Time limit: Increase timer, game over when limit reached
// - Delay: Wait for timer, then do something
// - Periodic events: Do something every N frames
//
// TIMER TYPES:
// - Elapsed time: How long has passed
// - Countdown: How much time is left
// - Delay: Wait before something happens
// - Periodic: Repeat every N frames/seconds
