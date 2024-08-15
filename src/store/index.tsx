import { configureStore } from '@reduxjs/toolkit';
import reducer from '@src/store/modules';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// };
//
// const persistedReducer = persistReducer(persistConfig, reducer);

const makeStore = (context) =>
  configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
