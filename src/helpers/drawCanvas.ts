export const DEFAULT_GRID_STEP = 20;
export const DEFAULT_GRID_LINES_COUNT = 100
export const DEFAULT_GRID_COLOR = 'grey'

type TDrawCanvasLineType = {
  ctx: CanvasRenderingContext2D
  index: number
  isVertical?: boolean
  gridColor?: string
  gridOffset?: [number, number]
  gridStep?: number
}

export const drawCanvasLine = ({
  ctx,
  index,
  isVertical = false,
  gridColor = DEFAULT_GRID_COLOR,
  gridStep = DEFAULT_GRID_STEP
}: TDrawCanvasLineType): void => {
  // TODO: исправить значения на вычисленные для текущего значения монитора
  let gridOffsetX = 0,
    gridOffsetY = gridStep * index,
    lineOffsetX = window.innerWidth,
    lineOffsetY = gridStep * index

  if (isVertical) {
    gridOffsetX = gridStep * index
    gridOffsetY = 0
    lineOffsetX = gridStep * index
    lineOffsetY = window.innerWidth
  }

  ctx.beginPath();
  ctx.moveTo(gridOffsetX, gridOffsetY);
  ctx.lineTo(lineOffsetX, lineOffsetY);
  ctx.closePath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = gridColor;
  ctx.stroke();
}