import { observer } from 'mobx-react';
import { useStore } from '../../stores';
import { Intro } from '../intro/intro';
import { StageEnum } from './stage.types';

export const Stage = observer(() => {
  const { currentStage } = useStore().stageStore;
  const renderStage = () => {
    switch (currentStage) {
    case StageEnum.INTRO: {
      return <Intro />;
    }
    }
  };

  return (
    <>
      {renderStage()}
    </>
  );
});
