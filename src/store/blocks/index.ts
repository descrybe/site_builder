import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// TODO: добавить линтер
// TODO: сделать базовый дизайн в фигме
// TODO: сделать простую схему в миро
// TODO: сделать нормальное формирование id

interface IBlocksState {
  count: number
  ids: number[]
  activeId: number
}

const initialState: IBlocksState = {
  count: 0,
  ids: [],
  activeId: 0
}

export const blocksSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    createBlock: (state) => {
      const newBlockId = state.ids.length === 0
        ? 1
        : state.ids[state.ids.length - 1] + 1
      state.count += 1
      state.ids.push(newBlockId)
      state.activeId = 0
    },
    removeBlockById: (state, action: PayloadAction<number>) => {
      state.count -= state.count
      state.ids = state.ids.filter(id => id !== action.payload)
    },
    removeAllBlocks: (state) => {
      state.count = 0
      state.ids = []
    },
    setActiveId: (state, action: PayloadAction<number>) => {
      state.activeId = action.payload
    }
  },
})

export const { createBlock, removeBlockById, removeAllBlocks, setActiveId } = blocksSlice.actions

export default blocksSlice.reducer