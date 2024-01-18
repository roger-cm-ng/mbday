import {
  action, makeAutoObservable, observable
} from 'mobx';
import {
  StageEnum
} from './stage.types';

export class StageStore {
  currentStage: number = StageEnum.INTRO;

  constructor () {
    makeAutoObservable(this, {
      currentStage: observable,
      setCurrentStage: action
    });
  }

  setCurrentStage (stage: number) {
    this.currentStage = stage;
  }
}
