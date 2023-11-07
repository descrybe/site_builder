type TDrawCanvasLineType = {
  ctx: CanvasRenderingContext2D
  index: number
  isVertical?: boolean
  gridColor?: string
  gridOffset?: [number, number]
  gridStep?: number
}

export enum EGridColor {
  GREY = 'grey', // DEFAULT
  BLACK = 'black',
  RED = 'red',
  WHITE = 'white'
}

export enum EGridStep {
  SMALL = 20, // DEFAULT
  MEDIUM = 35,
  BIG = 50,
}

export const drawCanvasLine = ({
  ctx,
  index,
  isVertical = false,
  gridColor = EGridColor.GREY,
  gridStep = EGridStep.SMALL
}: TDrawCanvasLineType): void => {
  let gridOffsetX = 0,
    gridOffsetY = gridStep * index,
    lineOffsetX = window.innerWidth,
    lineOffsetY = gridStep * index

  if (isVertical) {
    gridOffsetX = gridStep * index
    gridOffsetY = 0
    lineOffsetX = gridStep * index
    lineOffsetY = window.innerHeight
  }

  ctx.beginPath();
  ctx.moveTo(gridOffsetX, gridOffsetY);
  ctx.lineTo(lineOffsetX, lineOffsetY);
  ctx.closePath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = gridColor;
  ctx.stroke();
}