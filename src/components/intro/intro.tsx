import {
  Box, Fade, Button, Modal,
  ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter,
  useDisclosure
} from '@chakra-ui/react';
import {
  useEffect, useState, useRef
} from 'react';
import { observer } from 'mobx-react';
import fox from './fox.json';
import Lottie, { LottieRef } from 'lottie-react';

export const Intro = observer(() => {
  const [showText, setShowText] = useState(false);
  const lottieRef:LottieRef = useRef(null);
  const {
    isOpen, onOpen, onClose
  } = useDisclosure();

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      backgroundColor={'#001c38'}
      height={'100%'}
      p={'2em 2em 0'}
    >
      <Fade in={showText}>
        <Box
          width={'100%'}
          zIndex={1000}
          marginBottom={'10%'}
        >
          <Box
            color={'white'}
            fontSize={'2.8em'}
            width={'100%'}
            textAlign={'center'}
            lineHeight={'1em'}
          >
            Happy birthday, mate
          </Box>
        </Box>
        <Box
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          marginBottom={'10%'}
          zIndex={100}
          position={'relative'}
        >
          <Button
            onClick={onOpen}
            colorScheme='orange'
            size={'lg'}
            fontSize={'1.6em'}
            fontFamily={'verdana'}
            padding={'1em'}
            border={'2px solid white'}
          >
            message
          </Button>
        </Box>
      </Fade>
      <Box
        width={'100%'}
        height={'68%'}
        position={'relative'}
        zIndex={0}
      >
        <Lottie
          style={{
            position: 'absolute',
            width: '160%',
            left: '-30%',
            top: '-20%'
          }}
          lottieRef={lottieRef}
          animationData={fox}
          loop={true}
        />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Happy birthday, mate</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            fontFamily={'verdana'}
          >
            <Box
              marginBottom={'0.6em'}
            >
              Another year and I can't believe you've grown so much in a year. Anyway, I must say you've done quite well last year, got into the math acceleration. School football, we all know you are the pivot of the team, without you, the team wouldn't be playing in the final. This end of the year holiday, I think it's your most productive, you've assembled a gaming PC which is not easy. 
            </Box>
            <Box>
              May you be successful academically and in your sport endeavors this year. Enjoy your remaining holidays and have a very happy birthday
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='orange' mr={3} onClick={onClose} fontFamily={'verdana'}>
              close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
});
