import {
  action, makeAutoObservable, observable
} from 'mobx';
import { fireworkImgs } from './game.constants';

export class GameStore {
  score: number = 0;
  totalAmmos: number = 3;
  currentAmmo: number = -1;
  fireworkIndex: number = 0;

  constructor () {
    makeAutoObservable(this, {
      score: observable,
      totalAmmos: observable,
      currentAmmo: observable,
      fireworkIndex: observable,
      setScore: action,
      resetGame: action,
      setCurrentAmmo: action,
      setFireworkIndex: action
    });
  }

  setScore (score: number) {
    this.score = score;
  }

  resetGame () {
    this.score = 0;
    this.currentAmmo = -1;
    this.fireworkIndex = 0;
  }

  setCurrentAmmo (currentAmmo: number) {
    if (currentAmmo < this.totalAmmos) {
      this.currentAmmo = currentAmmo;
    }
  }

  setFireworkIndex (fireworkIndex: number) {
    if (fireworkIndex <= fireworkImgs.length) {
      this.fireworkIndex = fireworkIndex;
    }
  }
}
