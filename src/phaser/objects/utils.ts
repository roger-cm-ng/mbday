import random from 'just-random-integer';
import { Side } from './game.types';

export const randVelX = () => {
  return random(3, 8) * 60;
};

export const randSide = () => {
  return random() === 0 ? Side.LEFT : Side.RIGHT;
};
