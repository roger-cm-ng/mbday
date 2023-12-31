/* eslint-disable @typescript-eslint/no-explicit-any */

import Phaser from 'phaser';
import arrayShuffle from 'array-shuffle';

import Ship from './objects/ship';
import Firework from './objects/firework';
import Ammo from './objects/ammo';
import store from '../stores';
import {
  fireworkConstants, fireworkImgs
} from './objects/game.constants';
import { randSide } from './objects/utils';
import NavButton from './objects/nav-button';

export default class MainScene extends Phaser.Scene {
  ammos: Phaser.Physics.Arcade.Sprite[] = [];
  rightArrowKey: any;
  leftArrowKey: any;
  ship: any;
  leftBtn: any;
  rightBtn: any;
  leftBtnDown = false;
  rightBtnDown = false;
  shootBtn: any;

  constructor () {
    super({ key: 'MainScene' });
  }

  create () {
    const { fireworkY } = fireworkConstants;

    this.ship = new Ship({ scene: this });

    for (let i = 0; i < store.gameStore.totalAmmos; i++) {
      this.ammos.push(new Ammo({
        scene: this,
        ship: this.ship,
        index: i
      }));
    }

    arrayShuffle(fireworkImgs).forEach((img, index) => {
      new Firework({
        scene: this,
        img,
        side: randSide(),
        y: fireworkY,
        ammos: this.ammos,
        index
      });
    });

    this.shootBtn = new NavButton({
      scene: this,
      x: 100,
      y: 1180,
      img: 'shoot-button'
    });

    this.leftBtn = new NavButton({
      scene: this,
      x: 440,
      y: 1180,
      img: 'nav-button'
    });

    this.rightBtn = new NavButton({
      scene: this,
      x: 620,
      y: 1180,
      flipX: true,
      img: 'nav-button'
    });

    this.fireAmmo();
    this.shipNav();
  }

  private fireAmmo () {
    const spaceKey = this.input.keyboard?.addKey('SPACE');

    // On keyboard
    spaceKey?.on('down', () => {
      store.gameStore.setCurrentAmmo(store.gameStore.currentAmmo + 1);
    });

    // On mobile
    this.shootBtn.on('pointerdown', () => {
      store.gameStore.setCurrentAmmo(store.gameStore.currentAmmo + 1);
    });
  }

  private shipNav () {
    this.rightArrowKey = this.input.keyboard?.addKey('RIGHT');
    this.leftArrowKey = this.input.keyboard?.addKey('LEFT');

    this.rightBtn.on('pointerdown', () => {
      this.rightBtnDown = true;
    });
    this.rightBtn.on('pointerup', () => {
      this.rightBtnDown = false;
    });
    this.leftBtn.on('pointerdown', () => {
      this.leftBtnDown = true;
    });
    this.leftBtn.on('pointerup', () => {
      this.leftBtnDown = false;
    });
  }

  update () {
    if (this.rightArrowKey?.isDown) {
      this.ship.setX(this.ship.x + 5);
    }
    if (this.leftArrowKey?.isDown) {
      this.ship.setX(this.ship.x - 5);
    }
    if (this.rightBtnDown) {
      this.ship.setX(this.ship.x + 5);
      console.log('right btn down', this.rightBtnDown);
    }
    if (this.leftBtnDown) {
      this.ship.setX(this.ship.x - 5);
      console.log('left btn down', this.leftBtnDown);
    }
  }
}
