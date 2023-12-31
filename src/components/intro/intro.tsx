import {
  Box, Button, Image, Modal,
  ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter,
  useDisclosure
} from '@chakra-ui/react';
import { useStore } from '../../stores';
import { StageEnum } from '../stage/stage.types';
import bridge from '../outro/bridge.svg';

export const Intro = () => {
  const { stageStore } = useStore();
  const {
    isOpen, onOpen, onClose
  } = useDisclosure();

  return (
    <Box
      backgroundColor={'#ffffed'}
      width={'100%'}
      height={'100%'}
    >
      <Box
        position={'absolute'}
        top={'14%'}
        width={'100%'}
        zIndex={100}
      >
        <Box
          color={'orange'}
          fontSize={'3em'}
          textAlign={'center'}
          lineHeight={'1em'}
          fontWeight={'bold'}
        >
          FIREWORK INVADERS
        </Box>
      </Box>
      <Box
        position={'absolute'}
        bottom={'30%'}
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        zIndex={110}
      >
        <Button
          onClick={() => stageStore.setCurrentStage(StageEnum.GAME)}
          colorScheme='orange'
          size={'lg'}
          fontSize={'1.6em'}
          padding={'1em'}
          letterSpacing={'0.1em'}
          border={'2px solid white'}
        >
          PLAY
        </Button>
      </Box>
      <Box
        position={'absolute'}
        bottom={'20%'}
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        zIndex={120}
      >
        <Button onClick={onOpen}>Instructions</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Instructions</ModalHeader>
            <ModalCloseButton />
            <ModalBody
              fontFamily={'verdana'}
            >
              <Box
                marginBottom={'0.6em'}
              >
                You have to shoot down all 3 Firework Invaders to save the New Year's eve event
              </Box>
              <Box
                marginBottom={'0.6em'}
                fontWeight={'bold'}
              >
                For keyboard user:
              </Box>
              <Box
                margin={'0 0 0.2em 0.4em'}
              >
                Press the left and right arrow keys to move left and right
              </Box>
              <Box
                margin={'0 0 0.1em 0.4em'}
              >
                Press the spacebar to shoot
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='orange' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Image
        src={bridge}
        position={'absolute'}
        bottom={0}
      />
    </Box>
  );
};
