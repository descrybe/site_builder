import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

interface BlocksState {
  count: number
}

// Define the initial state using that type
const initialState: BlocksState = {
  count: 0,
}

export const blocksSlice = createSlice({
  name: 'blocks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
})

// export const { increment, decrement, incrementByAmount } = blocksSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default blocksSlice.reducer