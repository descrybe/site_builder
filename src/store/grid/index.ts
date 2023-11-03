import { DEFAULT_GRID_STEP, DEFAULT_GRID_COLOR } from '@helpers/drawCanvas'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IGridState {
  color: string
  step: number
}

const initialState: IGridState = {
  color: DEFAULT_GRID_COLOR,
  step: DEFAULT_GRID_STEP,
}

export const gridSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    changeGridStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
    changeGridColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload
    }
  },
})

export const { changeGridStep, changeGridColor } = gridSlice.actions

export default gridSlice.reducer