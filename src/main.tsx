import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
  ChakraProvider, extendTheme
} from '@chakra-ui/react';
import store, { StoreContext } from './stores';
import '@fontsource/silkscreen';

const theme = extendTheme({
  fonts: { body: '\'silkscreen\', sans-serif' },
  styles: {
    global: {
      html: { overflow: 'hidden' },
      body: {
        backgroundColor: 'black',
        overflow: 'hidden'
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </StoreContext.Provider>
  </React.StrictMode>
);
