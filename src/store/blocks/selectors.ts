import { RootState } from "..";

export const getBlocksCount = (state: RootState): number => state.blocks.count
export const getBlocksIds = (state: RootState): number[] => state.blocks.ids