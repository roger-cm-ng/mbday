import Phaser from 'phaser';
import { NavButtonProps } from './game.types';

export default class NavButton extends Phaser.Physics.Arcade.Sprite {
  constructor ({
    scene, x, y, flipX, img
  }: NavButtonProps) {
    super(scene, x, y, img);

    scene.add.existing(this);
    scene.input.enabled = true;

    this.setInteractive()
      .flipX = flipX as boolean;
  }
}
