import Phaser from 'phaser';
import { ShipProps } from './game.types';

export default class Ship extends Phaser.Physics.Arcade.Sprite {
  constructor ({ scene }: ShipProps) {
    super(scene, 360, 1000, 'ship');

    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.input.enabled = true;

    this.setCollideWorldBounds(true)
      .setInteractive();
  }
}
