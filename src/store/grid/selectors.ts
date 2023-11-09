import { EGridColor } from "@helpers/drawCanvas";
import { IGridState } from ".";
import { RootState } from "..";

export const getGridColor = (state: RootState): EGridColor => state.grid.color
export const getGridStep = (state: RootState): number => state.grid.step
export const getGridAlpha = (state: RootState): number => state.grid.alpha
export const getGridProperties = (state: RootState): IGridState => state.grid