import Phaser from 'phaser';
import store from '../../stores';
import { autorun } from 'mobx';
import { AmmoProps } from './game.types';

export default class Ammo extends Phaser.Physics.Arcade.Sprite {
  finalX: null | number = null;
  fired = false;
  ship;

  constructor ({
    scene, ship, index
  } : AmmoProps) {
    super(scene, 0, 0, 'ammo');
    this.finalX = null;
    this.fired = false;
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.ship = ship;

    this.y = this.ship.y;
    this.setInteractive();

    autorun(() => {
      if (index === store.gameStore.currentAmmo) {
        scene.sound.play('shoot');
        this.finalX = this.x;
        this.fired = true;
      }
    });
  }

  preUpdate () {
    this.x = this.finalX ? this.finalX : this.ship.x;

    if (this.fired) {
      this.y = this.y - 10;
    }
  }
}
