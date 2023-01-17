import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';

import rootReducer from './modules';

const isDev = process.env.NODE_ENV !== 'production';

/** wrapper에 store를 전달하는 콜백함수 */
const makeStore = () => {
  // 환경변수에 따른 store 설정
  const store = isDev
    ? configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(logger),
        devTools: isDev,
      })
    : configureStore({
        reducer: rootReducer,
        devTools: isDev,
      });

  return store;
};

export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];

export const wrapper = createWrapper(makeStore, { debug: isDev });
