import Phaser from 'phaser';
import {
  FireworkProps, Side
} from './game.types';
import {
  gameConstants, fireworkConstants
} from './game.constants';
import { autorun } from 'mobx';
import store from '../../stores';
import { randVelX } from './utils';

export default class Firework extends Phaser.Physics.Arcade.Sprite {
  side;
  index;

  constructor ({
    scene, img, side, y, ammos, index
  }: FireworkProps) {
    super(
      scene,
      side === Side.LEFT ? -fireworkConstants.offsetX : gameConstants.width + fireworkConstants.offsetX,
      y,
      img
    );

    this.side = side;
    this.index = index;

    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.tweens.add({
      targets: this,
      angle: 360,
      duration: 2000,
      repeat: -1
    });

    this.setInteractive();

    ammos.forEach((ammo) => {
      scene.physics.add.collider(this, ammo, () => {
        this.setVelocity(0, -300);
        ammo.destroy();
        store.gameStore.setFireworkIndex(store.gameStore.fireworkIndex + 1);
        store.gameStore.setScore(store.gameStore.score + 1);
      });
    });

    autorun(() => {
      console.log(index, img, side, store.gameStore.fireworkIndex);
      if (this.index === store.gameStore.fireworkIndex) {
        if (this.side === Side.LEFT) {
          this.setVelocityX(randVelX());
        } else {
          this.setVelocityX(-randVelX());
        }
      }
    });
  }

  preUpdate () {
    if (this.side === Side.LEFT && this.x > gameConstants.width + fireworkConstants.offsetX) {
      this.destroy();
      store.gameStore.setFireworkIndex(store.gameStore.fireworkIndex + 1);
    } else if (this.side === Side.RIGHT && this.x < -fireworkConstants.offsetX) {
      this.destroy();
      store.gameStore.setFireworkIndex(store.gameStore.fireworkIndex + 1);
    }
  }
}
