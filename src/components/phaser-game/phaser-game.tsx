import { Game } from 'phaser';
import {
  useEffect, FC
} from 'react';
import MainScene from '../../phaser/main-scene';
import PreloadScene from '../../phaser/preload-scene';
import Phaser from 'phaser';
import {
  Box, Text
} from '@chakra-ui/react';
import { useStore } from '../../stores';
import { observer } from 'mobx-react';
import {
  AnimationEnum, StageEnum
} from '../stage/stage.types';
import { gameConstants } from '../../phaser/objects/game.constants';

const {
  width, height
} = gameConstants;
const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffed',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width,
    height
  },
  scene: [PreloadScene, MainScene],
  physics: {
    default: 'arcade',
    arcade: { debug: false }
  },
  pixelArt: true
};

export const PhaserGame: FC = observer(() => {
  const {
    gameStore, stageStore
  } = useStore();

  useEffect(() => {
    const game = new Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  useEffect(() => {
    if (gameStore.score === 3) {
      stageStore.setAnimation(AnimationEnum.SUCCESS);
      stageStore.setCurrentStage(StageEnum.OUTRO);
    } else if (gameStore.fireworkIndex === 3) {
      stageStore.setAnimation(AnimationEnum.FAIL);
      stageStore.setCurrentStage(StageEnum.OUTRO);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStore.score, gameStore.fireworkIndex]);

  return (
    <>
      <Text
        color={'#444'}
        position={'absolute'}
        right={'0.6em'}
        top={'0.6em'}
        fontSize={'1.6em'}
        fontWeight={700}
      >
        SCORE
        <span
          style={{ color: 'orange' }}
        >
          {` ${gameStore.score}`}
        </span>
      </Text>
      <Box id="phaser-game"></Box>
    </>
  );
});
