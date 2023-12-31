import Phaser from 'phaser';

export default class PreloadScene extends Phaser.Scene {
  constructor () {
    super({ key: 'PreloadScene' });
  }

  preload () {
    this.load.image('ship', 'assets/ship-pixel.png');
    this.load.image('firework-arrow', 'assets/firework-arrow-pixel.png');
    this.load.image('firework-round', 'assets/firework-round-pixel.png');
    this.load.image('firework-square', 'assets/firework-square-pixel.png');
    this.load.image('ammo', 'assets/ammo-pixel.png');
    this.load.image('nav-button', 'assets/nav-button.png');
    this.load.image('shoot-button', 'assets/shoot-button.png');
    this.load.audio('shoot', 'assets/shoot.mp3');
  }

  create () {
    this.scene.start('MainScene');
  }
}
