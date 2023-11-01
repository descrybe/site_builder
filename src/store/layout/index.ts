import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// TODO: добавить линтер
// TODO: сделать базовый дизайн в фигме
// TODO: сделать простую схему в миро
// TODO: сделать нормальное формирование id

interface ILayoutState {
  isHeaderVisible: boolean
}

const initialState: ILayoutState = {
  isHeaderVisible: true,
}

export const layoutSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    setIsHeaderVisible: (state, action: PayloadAction<boolean>) => {
      state.isHeaderVisible = action.payload
    },
  },
})

export const { setIsHeaderVisible } = layoutSlice.actions

export default layoutSlice.reducer