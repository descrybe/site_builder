import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './layout'
import blocksReducer from './blocks'
import gridReducer from './grid';

export const store = configureStore({
  reducer: {
    blocks: blocksReducer,
    grid: gridReducer,
    layout: layoutReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch