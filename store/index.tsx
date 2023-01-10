import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './modules';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NEXTNODE_ENV !== 'production',
});

const makeStore = () => {
  return store;
};

export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
