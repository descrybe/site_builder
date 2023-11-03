export const GRID_STEP = 50;

export const drawCanvasLine = (ctx: CanvasRenderingContext2D, index: number, isVertical = false): void => {
  let gridOffsetX = 0,
    gridOffsetY = GRID_STEP * index,
    lineOffsetX = window.innerHeight,
    lineOffsetY = GRID_STEP * index

  if (isVertical) {
    gridOffsetX = GRID_STEP * index
    gridOffsetY = 0
    lineOffsetX = GRID_STEP * index
    lineOffsetY = window.innerWidth
  }

  ctx.beginPath();
  ctx.moveTo(gridOffsetX, gridOffsetY);
  ctx.lineTo(lineOffsetX, lineOffsetY);
  ctx.closePath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'black';
  ctx.stroke();
}