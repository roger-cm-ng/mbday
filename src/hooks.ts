import {
  useState,
  useEffect
} from 'react';

export const useWindowSize = (): ({ viewWidth: number; viewHeight: number }) => {
  const [windowSize, setWindowSize] = useState({
    viewWidth: 0,
    viewHeight: 0
  });

  useEffect(() => {
    function handleResize () {
      setWindowSize({
        viewWidth: window.innerWidth,
        viewHeight: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

