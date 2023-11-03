/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useRef, useEffect } from "react";
import './style.scss';
import { DEFAULT_GRID_LINES_COUNT, drawCanvasLine } from "@helpers/drawCanvas";
import { useAppSelector } from "@store/hooks";
import { getGridProperties } from "@store/grid/selectors";

// TODO: изменить параметры на правильные значения сетки

const BuilderGrid = () => {
  const canvasRef = useRef(null)
  const { color, step } = useAppSelector(getGridProperties);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;

      for (let i = 0; i < DEFAULT_GRID_LINES_COUNT; i++) {
        drawCanvasLine({ ctx, index: i, isVertical: true, color, step })
      }
      for (let i = 0; i < DEFAULT_GRID_LINES_COUNT / 2; i++) {
        drawCanvasLine({ ctx, index: i, color, step })
      }
    }
  }, [color, step])

  return (
    <div className='grid-canvas-wrapper'>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default BuilderGrid;