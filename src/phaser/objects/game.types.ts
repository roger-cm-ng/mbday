/* eslint-disable no-unused-vars */

import Phaser from 'phaser';

export type ShipProps = {
  scene: Phaser.Scene
}

export type FireworkProps = {
  scene: Phaser.Scene
  side: string
  y: number
  img: string
  ammos: Phaser.Physics.Arcade.Sprite[]
  index: number
}

export type AmmoProps = {
  scene: Phaser.Scene
  ship: Phaser.Physics.Arcade.Sprite
  index: number
}

export type NavButtonProps = {
  scene: Phaser.Scene
  x: number
  y: number
  flipX?: boolean
  img: string
}

export enum Side {
  LEFT = 'left',
  RIGHT = 'right'
}
