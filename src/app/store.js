import { configureStore } from '@reduxjs/toolkit';
import feedReducer from '../features/feed';

export const store = configureStore({
  reducer: {
    selectedFeed: feedReducer,
  },
});
