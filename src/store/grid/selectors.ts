import { IGridState } from ".";
import { RootState } from "..";

export const getGridColor = (state: RootState): string => state.grid.color
export const getGridStep = (state: RootState): number => state.grid.step
export const getGridProperties = (state: RootState): IGridState => state.grid