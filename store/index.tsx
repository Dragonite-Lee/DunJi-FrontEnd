import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NEXTNODE_ENV !== 'production',
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

const makeStore = () => {
  return store;
};

export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
