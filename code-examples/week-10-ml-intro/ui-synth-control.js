// UI Synth Control
// Demonstrates using UI controls to manipulate sound synthesis
//
// This example builds on Week 9's sound synthesis lessons by adding UI controls
// to manipulate an oscillator. Use sliders to control frequency and amplitude,
// buttons to start/stop, and checkboxes to toggle effects.
//
// IMPORTANT: Requires p5.sound library. Browsers require user interaction
// before playing audio. Click the "Start" button to begin.

// Sound variables
let osc;
let isPlaying = false;
let frequency = 440;  // Starting frequency (A note)
let amplitude = 0.3;  // Starting volume (0.0 to 1.0)
let waveformType = 'sine';

// UI controls
let freqSlider;
let ampSlider;
let waveformSelect;
let startButton;
let stopButton;
let tremoloCheckbox;
let tremoloSpeed = 0;

function setup() {
  createCanvas(400, 500);
  
  // Create oscillator (sound generator)
  // p5.Oscillator creates a tone generator
  osc = new p5.Oscillator('sine');
  osc.amp(amplitude);
  osc.freq(frequency);
  
  // Frequency slider (pitch control)
  // Range: 100-1000 Hz (musical range)
  freqSlider = createSlider(100, 1000, 440, 1);
  freqSlider.position(20, 20);
  freqSlider.style('width', '300px');
  
  // Amplitude slider (volume control)
  // Range: 0.0-1.0 (0 = silent, 1 = full volume)
  ampSlider = createSlider(0, 100, 30, 1);
  ampSlider.position(20, 50);
  ampSlider.style('width', '300px');
  
  // Waveform type selector
  waveformSelect = createSelect();
  waveformSelect.position(20, 80);
  waveformSelect.option('sine');
  waveformSelect.option('triangle');
  waveformSelect.option('square');
  waveformSelect.option('sawtooth');
  waveformSelect.changed(waveformChanged);
  
  // Start button
  startButton = createButton('Start');
  startButton.position(20, 110);
  startButton.mousePressed(startSound);
  
  // Stop button
  stopButton = createButton('Stop');
  stopButton.position(100, 110);
  stopButton.mousePressed(stopSound);
  
  // Tremolo effect checkbox
  tremoloCheckbox = createCheckbox('Tremolo Effect', false);
  tremoloCheckbox.position(20, 140);
}

function draw() {
  background(220);
  
  // Read slider values and update oscillator
  if (isPlaying) {
    // Update frequency from slider
    frequency = freqSlider.value();
    osc.freq(frequency);
    
    // Update amplitude from slider
    // Slider gives 0-100, convert to 0.0-1.0
    let baseAmp = ampSlider.value() / 100.0;
    
    // Apply tremolo effect if checkbox is checked
    if (tremoloCheckbox.checked()) {
      tremoloSpeed += 0.1;
      // Create tremolo: oscillate amplitude between 0.3 and full value
      let tremolo = sin(tremoloSpeed) * 0.3 + 0.7;
      osc.amp(baseAmp * tremolo);
    } else {
      osc.amp(baseAmp);
    }
  }
  
  // Display current settings
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text('Frequency: ' + int(frequency) + ' Hz', 20, 200);
  text('Amplitude: ' + nf(amplitude, 1, 2), 20, 220);
  text('Waveform: ' + waveformType, 20, 240);
  text('Status: ' + (isPlaying ? 'Playing' : 'Stopped'), 20, 260);
  
  // Visual feedback: draw waveform visualization
  if (isPlaying) {
    drawWaveform();
  }
  
  // Display UI labels
  textSize(12);
  text('Frequency (Pitch)', 340, 35);
  text('Amplitude (Volume)', 340, 65);
  text('Waveform Type', 200, 95);
}

// Draw a simple waveform visualization
function drawWaveform() {
  stroke(100, 150, 255);
  strokeWeight(2);
  noFill();
  
  beginShape();
  for (let x = 0; x < width; x++) {
    let angle = map(x, 0, width, 0, TWO_PI * 4);
    let y;
    
    // Draw different waveforms based on selected type
    if (waveformType === 'sine') {
      y = sin(angle) * 50 + 350;
    } else if (waveformType === 'triangle') {
      y = (2 * abs((angle % TWO_PI) / TWO_PI - 0.5) - 0.5) * 50 + 350;
    } else if (waveformType === 'square') {
      y = (sin(angle) > 0 ? 1 : -1) * 50 + 350;
    } else if (waveformType === 'sawtooth') {
      y = ((angle % TWO_PI) / TWO_PI - 0.5) * 50 + 350;
    }
    
    vertex(x, y);
  }
  endShape();
}

// Start sound playback
function startSound() {
  if (!isPlaying) {
    osc.start();
    isPlaying = true;
  }
}

// Stop sound playback
function stopSound() {
  if (isPlaying) {
    osc.stop();
    isPlaying = false;
  }
}

// Change waveform type
function waveformChanged() {
  waveformType = waveformSelect.value();
  osc.setType(waveformType);
}

// KEY CONCEPTS:
// 1. UI controls provide real-time control over sound parameters
// 2. Sliders are perfect for continuous values (frequency, amplitude)
// 3. Buttons provide discrete actions (start/stop)
// 4. Select menus are good for choosing from options (waveform types)
// 5. Checkboxes can toggle effects (tremolo, reverb, etc.)
// 6. Always update sound parameters in draw() when using sliders
//
// EXPERIMENT:
// - Add more sliders for additional parameters (pan, detune, etc.)
// - Add more checkboxes for different effects
// - Create multiple oscillators with different controls
// - Use UI to control envelope (attack, decay, sustain, release)
