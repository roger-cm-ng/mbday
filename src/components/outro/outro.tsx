import {
  Box, Fade, Button, Image
} from '@chakra-ui/react';
import {
  useEffect, useState, useRef
} from 'react';
import { useStore } from '../../stores';
import { observer } from 'mobx-react';
import { AnimationEnum } from '../stage/stage.types';
import success from './fireworks.json';
import Lottie, { LottieRef } from 'lottie-react';
import bridge from './bridge.svg';
import { Howl } from 'howler';
import fireworksMp3 from '../../../assets/fireworks.mp3';
import cricketsMp3 from '../../../assets/crickets.mp3';

export const Outro = observer(() => {
  const [showText, setShowText] = useState(false);
  const { stageStore } = useStore();
  const lottieRef:LottieRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 2000);

    const fireworksSound = new Howl({
      src: [fireworksMp3],
      loop: true
    });
    const cricketsSound = new Howl({
      src: [cricketsMp3],
      loop: true
    });

    if (stageStore.animation === AnimationEnum.SUCCESS) {
      fireworksSound.play();
    } else {
      cricketsSound .play();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playAgainHandler = () => {
    window.location.reload();
  };

  return (
    <Box
      backgroundColor={'#001c38'}
      height={'100%'}
    >
      <Fade in={showText}>
        <Box
          position={'absolute'}
          top={'10%'}
          width={'100%'}
          zIndex={1000}
        >
          <Box
            color={'white'}
            fontSize={'2.4em'}
            width={'100%'}
            textAlign={'center'}
            marginBottom={'0.8em'}
          >
            Happy New Year
          </Box>
          <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
          >
            <Button
              onClick={playAgainHandler}
              colorScheme='orange'
              size={'lg'}
              fontSize={'1.6em'}
              padding={'1em'}
              letterSpacing={'0.1em'}
              border={'2px solid white'}
            >
              RESTART
            </Button>
          </Box>
        </Box>
      </Fade>
      <Box
        position={'absolute'}
        top={'30%'}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={stageStore.animation === AnimationEnum.SUCCESS && success}
          loop={true}
        />
      </Box>
      <Image
        src={bridge}
        position={'absolute'}
        bottom={0}
      />
    </Box>
  );
});
