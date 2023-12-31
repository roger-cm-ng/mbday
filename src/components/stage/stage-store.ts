import {
  action, makeAutoObservable, observable
} from 'mobx';
import {
  AnimationEnum, StageEnum
} from './stage.types';

export class StageStore {
  currentStage: number = StageEnum.INTRO;
  animation: string = AnimationEnum.SUCCESS;

  constructor () {
    makeAutoObservable(this, {
      currentStage: observable,
      animation: observable,
      setCurrentStage: action,
      setAnimation: action
    });
  }

  setCurrentStage (stage: number) {
    this.currentStage = stage;
  }

  setAnimation (animation: string) {
    this.animation = animation;
  }
}
