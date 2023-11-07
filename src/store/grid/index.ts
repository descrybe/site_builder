import { EGridStep, EGridColor } from '@helpers/drawCanvas'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IGridState {
  color: EGridColor
  step: number
}

const initialState: IGridState = {
  color: EGridColor.GREY,
  step: EGridStep.SMALL,
}

export const gridSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    changeGridStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
    changeGridColor: (state, action: PayloadAction<EGridColor>) => {
      state.color = action.payload
    }
  },
})

export const { changeGridStep, changeGridColor } = gridSlice.actions

export default gridSlice.reducer