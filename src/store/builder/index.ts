import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IBuilderState {
  isSidePanelVisible: boolean
  isGridVisible: boolean
}

const initialState: IBuilderState = {
  isSidePanelVisible: true,
  isGridVisible: true
}

export const builderSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    changeGridVisibility: (state, action: PayloadAction<boolean>) => {
      state.isGridVisible = action.payload
    },
    changeSidePanelVisibility: (state, action: PayloadAction<boolean>) => {
      state.isSidePanelVisible = action.payload
    }
  },
})

export const { changeGridVisibility, changeSidePanelVisibility } = builderSlice.actions

export default builderSlice.reducer