// UI Synth Control - Simple Version
// Clean code without comments

let osc;
let isPlaying = false;
let frequency = 440;
let amplitude = 0.3;
let waveformType = 'sine';

let freqSlider;
let ampSlider;
let waveformSelect;
let startButton;
let stopButton;
let tremoloCheckbox;
let tremoloSpeed = 0;

function setup() {
  createCanvas(400, 500);
  
  osc = new p5.Oscillator('sine');
  osc.amp(amplitude);
  osc.freq(frequency);
  
  freqSlider = createSlider(100, 1000, 440, 1);
  freqSlider.position(20, 20);
  freqSlider.style('width', '300px');
  
  ampSlider = createSlider(0, 100, 30, 1);
  ampSlider.position(20, 50);
  ampSlider.style('width', '300px');
  
  waveformSelect = createSelect();
  waveformSelect.position(20, 80);
  waveformSelect.option('sine');
  waveformSelect.option('triangle');
  waveformSelect.option('square');
  waveformSelect.option('sawtooth');
  waveformSelect.changed(waveformChanged);
  
  startButton = createButton('Start');
  startButton.position(20, 110);
  startButton.mousePressed(startSound);
  
  stopButton = createButton('Stop');
  stopButton.position(100, 110);
  stopButton.mousePressed(stopSound);
  
  tremoloCheckbox = createCheckbox('Tremolo Effect', false);
  tremoloCheckbox.position(20, 140);
}

function draw() {
  background(220);
  
  if (isPlaying) {
    frequency = freqSlider.value();
    osc.freq(frequency);
    
    let baseAmp = ampSlider.value() / 100.0;
    
    if (tremoloCheckbox.checked()) {
      tremoloSpeed += 0.1;
      let tremolo = sin(tremoloSpeed) * 0.3 + 0.7;
      osc.amp(baseAmp * tremolo);
    } else {
      osc.amp(baseAmp);
    }
  }
  
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text('Frequency: ' + int(frequency) + ' Hz', 20, 200);
  text('Amplitude: ' + nf(amplitude, 1, 2), 20, 220);
  text('Waveform: ' + waveformType, 20, 240);
  text('Status: ' + (isPlaying ? 'Playing' : 'Stopped'), 20, 260);
  
  if (isPlaying) {
    drawWaveform();
  }
  
  textSize(12);
  text('Frequency (Pitch)', 340, 35);
  text('Amplitude (Volume)', 340, 65);
  text('Waveform Type', 200, 95);
}

function drawWaveform() {
  stroke(100, 150, 255);
  strokeWeight(2);
  noFill();
  
  beginShape();
  for (let x = 0; x < width; x++) {
    let angle = map(x, 0, width, 0, TWO_PI * 4);
    let y;
    
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

function startSound() {
  if (!isPlaying) {
    osc.start();
    isPlaying = true;
  }
}

function stopSound() {
  if (isPlaying) {
    osc.stop();
    isPlaying = false;
  }
}

function waveformChanged() {
  waveformType = waveformSelect.value();
  osc.setType(waveformType);
}
