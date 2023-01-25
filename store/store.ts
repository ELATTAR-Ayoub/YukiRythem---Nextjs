import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';
import musicSlice from './musicSlice';

const store = configureStore({
  reducer: {
    music: musicSlice,
  },
});

export const wrapper = createWrapper(() => store);
export const store_0001 = store;
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch();