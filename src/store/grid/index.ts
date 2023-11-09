import { EGridStep, EGridColor } from '@helpers/drawCanvas'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IGridState {
  color: EGridColor
  step: number
  alpha: number
}

const initialState: IGridState = {
  color: EGridColor.GREY,
  step: EGridStep.SMALL,
  alpha: 1
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
    },
    changeGridAlpha: (state, action: PayloadAction<number>) => {
      state.alpha = action.payload
    }
  },
})

export const { changeGridStep, changeGridColor, changeGridAlpha } = gridSlice.actions

export default gridSlice.reducer