import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './layout'
import blocksReducer from './blocks'

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    blocks: blocksReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch