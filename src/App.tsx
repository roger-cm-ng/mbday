import { Box } from '@chakra-ui/react';
import { Stage } from './components/stage/stage';
import { useWindowSize } from './hooks';
import { isMobile } from 'react-device-detect';
import useWindowOrientation from 'use-window-orientation';
import { event } from 'react-ga';
import { useGoogleAnalytics } from './hooks';
import { useEffect } from 'react';

function App () {
  const windowSize = useWindowSize();
  const {
    viewWidth, viewHeight
  } = windowSize;
  const { landscape } = useWindowOrientation();
  const gtmInitialised = useGoogleAnalytics();

  useEffect(() => {
    if (gtmInitialised) {
      event({
        category: 'NewYear2024 system new',
        action: 'NewYear2024 Categories',
        label: 'NewYear2024 Categories loaded'
      });
    }
  // eslint-disable-next-line
  },[]);

  return (
    <>
      <Box
        position={'fixed'}
        height={`${viewHeight}px`}
        width={`${viewWidth}px`}
        backgroundColor={'orange'}
        zIndex={10000}
        display={isMobile && landscape ? 'flex' : 'none'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          fontSize={'2em'}
          color={'white'}
          textAlign={'center'}
        >
          Please flip your mobile to portrait mode
        </Box>
      </Box>
      <Box
        margin={'0 auto'}
        height={viewWidth/viewHeight > 0.5625 ? `${viewHeight}px` : 'unset'}
        width={viewWidth/viewHeight > 0.5625 ? 'unset' : `${viewWidth}px`}
        aspectRatio={0.5625}
        backgroundColor={'white'}
        position={'relative'}
      >
        <Stage />
      </Box>
    </>
  );
}

export default App;
