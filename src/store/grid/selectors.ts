import { EGridColor } from "@helpers/drawCanvas";
import { IGridState } from ".";
import { RootState } from "..";

export const getGridColor = (state: RootState): EGridColor => state.builder.isGridVisible
    ? state.grid.color : EGridColor.WHITE
export const getGridStep = (state: RootState): number => state.grid.step
export const getGridProperties = (state: RootState): IGridState => state.grid