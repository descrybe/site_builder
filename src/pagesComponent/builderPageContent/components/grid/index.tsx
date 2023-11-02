/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useRef, useEffect } from "react";
import './style.scss';

const GRID_STEP = 50;

// TODO: вынести функцию в helpers и изменить параметры на правильные значения сетки
const drawCanvasLine = (ctx: CanvasRenderingContext2D, index: number, isVertical = false): void => {
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

const BuilderGrid = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d'); 
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;

      for (let i = 0; i < 32; i++) {
        drawCanvasLine(ctx, i, true)
        drawCanvasLine(ctx, i)
      }
    }
  }, [])

  return (
    <div className='grid-canvas-wrapper'>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default BuilderGrid;