import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TBlockProperties } from '../../constants/blockParams'

// TODO: добавить линтер
// TODO: сделать базовый дизайн в фигме
// TODO: сделать простую схему в миро
// TODO: сделать нормальное формирование id

interface IBlocksState {
  count: number
  ids: number[]
}

const initialState: IBlocksState = {
  count: 0,
  ids: []
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
    },
    removeBlock: (state, action: PayloadAction<TBlockProperties>) => {
      state.count -= action.payload.amount
      state.ids.filter(id => id !== action.payload.id)
    },
    removeAllBlocks: (state) => {
      state.count = 0
      state.ids = []
    }
  },
})

export const { createBlock, removeBlock, removeAllBlocks } = blocksSlice.actions

export default blocksSlice.reducer