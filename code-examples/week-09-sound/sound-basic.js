// Sound Basic
// Demonstrates basic sound synthesis with p5.sound
//
// p5.sound library lets you create and manipulate sound in p5.js.
// This example uses an oscillator to generate tones. The frequency
// (pitch) is controlled by mouse position, creating an interactive
// sound experience.
//
// IMPORTANT: Browsers require user interaction before playing audio.
// Click the canvas to start the sound!

// Variable to store oscillator object
let osc;
let isPlaying = false;

function setup() {
  createCanvas(400, 400);

  // Create oscillator (sound generator)
  // p5.Oscillator creates a tone generator
  // 'sine' is the waveform type (smooth, pure tone)
  // Other options: 'square', 'triangle', 'sawtooth'
  osc = new p5.Oscillator('sine');

  // Set initial amplitude (volume) to a reasonable level
  osc.amp(0.3);
}

function draw() {
  background(220);

  // Display instructions
  fill(0);
  textAlign(CENTER);
  textSize(14);
  if (!isPlaying) {
    text('Click to start sound', width/2, 50);
  } else {
    text('Move mouse to change pitch', width/2, 50);
    text('Click to stop', width/2, 70);
  }

  // Control frequency (pitch) with mouse X position when playing
  // Frequency measured in Hz (cycles per second)
  // Higher frequency = higher pitch
  if (isPlaying) {
    // Map mouseX to a musical range (200-800 Hz)
    let freq = map(mouseX, 0, width, 200, 800);
    osc.freq(freq);

    // Display current frequency
    text('Frequency: ' + int(freq) + ' Hz', width/2, height - 30);
  }

  // Visual feedback: circle follows mouse
  // This creates connection between visual and audio
  fill(100, 150, 255);
  ellipse(mouseX, 200, 50, 50);

  // HOW IT WORKS:
  // - Move mouse left → low frequency → low pitch
  // - Move mouse right → high frequency → high pitch
  // - Smooth movement creates smooth pitch changes

  // NOTE: Make sure your volume isn't too loud!
  // p5.sound requires the p5.sound library to be included
}

function mousePressed() {
  // Toggle sound on/off with mouse click
  // Browsers require user interaction before playing audio
  if (isPlaying) {
    osc.stop();
    isPlaying = false;
  } else {
    osc.start();
    isPlaying = true;
  }
}

// EXPERIMENT:
// - Try different waveforms: osc.setType('square'), 'triangle', 'sawtooth'
// - Control amplitude (volume): osc.amp(mouseY / height)
// - Try mapping mouseY to amplitude for volume control
