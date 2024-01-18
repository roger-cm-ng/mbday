/* eslint-disable react-refresh/only-export-components */
import {
  createContext, useContext
} from 'react';

import { StageStore } from './components/stage/stage-store';

const store = {
  stageStore: new StageStore()
};

export const StoreContext = createContext(store);

export const useStore = () => useContext<typeof store>(StoreContext);

export default store;
