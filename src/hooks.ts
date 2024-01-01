import {
  useState,
  useEffect
} from 'react';
import {
  initialize,
  pageview
} from 'react-ga';

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

export const useGoogleAnalytics = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      initialize('GTM-NPD6B7KT');
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      pageview(window.location.href);
    }
  }, [initialized]);

  return initialized;
};

