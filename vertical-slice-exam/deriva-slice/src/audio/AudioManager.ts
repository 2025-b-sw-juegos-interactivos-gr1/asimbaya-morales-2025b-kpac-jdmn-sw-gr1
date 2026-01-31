export class AudioManager {
    private ctx: AudioContext;

    constructor() {
        this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    beep(freq = 880, duration = 0.08) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "sine";
        osc.frequency.value = freq;

        gain.gain.value = 0.0001;
        gain.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration + 0.02);
    }
}
