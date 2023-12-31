import Phaser from 'phaser';

export default class PreloadScene extends Phaser.Scene {
  constructor () {
    super({ key: 'PreloadScene' });
  }

  preload () {
    this.load.image('ship', 'https://cdn.jsdelivr.net/gh/roger-cm-ng/fireworks-igniter/assets/ship-pixel.png');
    this.load.image('firework-arrow', 'https://cdn.jsdelivr.net/gh/roger-cm-ng/fireworks-igniter/assets/firework-arrow-pixel.png');
    this.load.image('firework-round', 'https://cdn.jsdelivr.net/gh/roger-cm-ng/fireworks-igniter/assets/firework-round-pixel.png');
    this.load.image('firework-square', 'https://cdn.jsdelivr.net/gh/roger-cm-ng/fireworks-igniter/assets/firework-square-pixel.png');
    this.load.image('ammo', 'https://cdn.jsdelivr.net/gh/roger-cm-ng/fireworks-igniter/assets/ammo-pixel.png');
    this.load.image('nav-button', 'https://cdn.jsdelivr.net/gh/roger-cm-ng/fireworks-igniter/assets/nav-button.png');
    this.load.image('shoot-button', 'https://cdn.jsdelivr.net/gh/roger-cm-ng/fireworks-igniter/assets/shoot-button.png');
    this.load.audio('shoot', 'https://cdn.jsdelivr.net/gh/roger-cm-ng/fireworks-igniter/assets/shoot.mp3');
  }

  create () {
    this.scene.start('MainScene');
  }
}
