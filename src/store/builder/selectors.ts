import { RootState } from "..";

export const getIsSidePanelVisible = (state: RootState): boolean => state.builder.isSidePanelVisible
export const getIsGridVisible = (state: RootState): boolean => state.builder.isGridVisible