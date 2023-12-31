import { observer } from 'mobx-react';
import { useStore } from '../../stores';
import { Intro } from '../intro/intro';
import { PhaserGame } from '../phaser-game/phaser-game';
import { StageEnum } from './stage.types';
import { Outro } from '../outro/outro';

export const Stage = observer(() => {
  const { currentStage } = useStore().stageStore;
  const renderStage = () => {
    switch (currentStage) {
    case StageEnum.INTRO: {
      return <Intro />;
    }
    case StageEnum.GAME: {
      return <PhaserGame />;
    }
    case StageEnum.OUTRO: {
      return <Outro />;
    }
    }
  };

  return (
    <>
      {renderStage()}
    </>
  );
});
