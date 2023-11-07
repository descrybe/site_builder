import { configureStore } from '@reduxjs/toolkit';
import blocksReducer from './blocks';
import builderReducer from './builder';
import gridReducer from './grid';
import layoutReducer from './layout';

export const store = configureStore({
  reducer: {
    blocks: blocksReducer,
    builder: builderReducer,
    grid: gridReducer,
    layout: layoutReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch