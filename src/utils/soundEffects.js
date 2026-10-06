// ==========================================================
// PURE WEB AUDIO API SYNTHESIZER
// Zero external files, zero dependencies, 100% offline & reliable
// ==========================================================

let audioCtx = null;

const getAudioContext = () => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

// 1. Success Chime (ascending arpeggio C5 -> E5 -> G5 -> C6)
export const playSuccessChime = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

      gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.08);
      osc.stop(ctx.currentTime + idx * 0.08 + 0.36);
    });
  } catch (e) {
    console.debug('Audio play skipped:', e);
  }
};

// 2. XP Gain Sound (bright double ping)
export const playXPChime = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    [880, 1318.51].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.09);

      gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.09 + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.09);
      osc.stop(ctx.currentTime + idx * 0.09 + 0.31);
    });
  } catch (e) {
    console.debug('Audio play skipped:', e);
  }
};

// 3. Failure / Wrong Answer Sound (low subtle buzz)
export const playFailureChime = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(130, ctx.currentTime + 0.25);

    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.28);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.29);
  } catch (e) {
    console.debug('Audio play skipped:', e);
  }
};

// 4. Timer / Pomodoro Completion Ding (resonant bell)
export const playTimerDing = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);

    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 1.25);
  } catch (e) {
    console.debug('Audio play skipped:', e);
  }
};

// 5. Subtle Click / Tap
export const playClickSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, ctx.currentTime);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.06);
  } catch (e) {
    console.debug('Audio play skipped:', e);
  }
};

// ==========================================================
// AMBIENT SOUNDSCAPE SYNTHESIZER (For Study Lounge)
// Generates infinite seamless soundscapes without downloading files
// ==========================================================

export class AmbientSoundscape {
  constructor(type = 'rain') {
    this.type = type;
    this.isPlaying = false;
    this.nodes = [];
    this.gainNode = null;
    this.volume = 0.5;
  }

  start() {
    if (this.isPlaying) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    this.gainNode = ctx.createGain();
    this.gainNode.gain.setValueAtTime(this.volume * 0.15, ctx.currentTime);
    this.gainNode.connect(ctx.destination);

    if (this.type === 'rain') {
      this._startRain(ctx);
    } else if (this.type === 'binaural') {
      this._startBinaural(ctx);
    } else if (this.type === 'whitenoise') {
      this._startWhiteNoise(ctx);
    } else if (this.type === 'cafe') {
      this._startCafeHum(ctx);
    }

    this.isPlaying = true;
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.gainNode && audioCtx) {
      this.gainNode.gain.setValueAtTime(this.volume * 0.15, audioCtx.currentTime);
    }
  }

  stop() {
    if (!this.isPlaying) return;
    this.nodes.forEach((node) => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch (e) {
        // ignore
      }
    });
    this.nodes = [];
    this.isPlaying = false;
  }

  // Rain: Pink Noise with Bandpass Filter
  _startRain(ctx) {
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;
    noiseSource.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1100, ctx.currentTime);

    noiseSource.connect(filter);
    filter.connect(this.gainNode);
    noiseSource.start();

    this.nodes.push(noiseSource, filter);
  }

  // Binaural Alpha Beats (10Hz difference between left and right ears: 200Hz vs 210Hz)
  _startBinaural(ctx) {
    const oscLeft = ctx.createOscillator();
    const oscRight = ctx.createOscillator();
    const merger = ctx.createChannelMerger(2);

    oscLeft.type = 'sine';
    oscLeft.frequency.setValueAtTime(216, ctx.currentTime); // Base Carrier

    oscRight.type = 'sine';
    oscRight.frequency.setValueAtTime(226, ctx.currentTime); // +10Hz Alpha Focus beat

    oscLeft.connect(merger, 0, 0);
    oscRight.connect(merger, 0, 1);

    merger.connect(this.gainNode);

    oscLeft.start();
    oscRight.start();

    this.nodes.push(oscLeft, oscRight, merger);
  }

  // White Noise for deep concentration
  _startWhiteNoise(ctx) {
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.15;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;
    noiseSource.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime);

    noiseSource.connect(filter);
    filter.connect(this.gainNode);
    noiseSource.start();

    this.nodes.push(noiseSource, filter);
  }

  // Gentle Cafe / Ambient Room Hum
  _startCafeHum(ctx) {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(120, ctx.currentTime);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(180, ctx.currentTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(250, ctx.currentTime);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(this.gainNode);

    osc1.start();
    osc2.start();

    this.nodes.push(osc1, osc2, filter);
  }
}
