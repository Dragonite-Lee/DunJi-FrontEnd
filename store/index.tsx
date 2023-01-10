import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';

import rootReducer from './modules';

const isNotProductionEnv = process.env.NODE_ENV !== 'production';

const store = isNotProductionEnv
  ? configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
      devTools: isNotProductionEnv,
    })
  : configureStore({
      reducer: rootReducer,
      devTools: isNotProductionEnv,
    });

const makeStore = () => {
  return store;
};

export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore, {
  debug: isNotProductionEnv,
});
