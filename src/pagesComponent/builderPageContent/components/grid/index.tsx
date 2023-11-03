/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useRef, useEffect } from "react";
import './style.scss';
import { useWindowSize } from "react-use";

import { useAppSelector } from "@store/hooks";
import { getGridProperties } from "@store/grid/selectors";
import { drawCanvasLine } from "@helpers/drawCanvas";

const BuilderGrid = () => {
  const canvasRef = useRef(null)
  const { width, height } = useWindowSize()
  const { color, step } = useAppSelector(getGridProperties);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      canvasRef.current.width = width;
      canvasRef.current.height = height;

      for (let i = 0; i < width / step; i++) {
        drawCanvasLine({ ctx, index: i, isVertical: true, gridColor: color, gridStep: step })
      }
      for (let i = 0; i < height / step; i++) {
        drawCanvasLine({ ctx, index: i, gridColor: color, gridStep: step })
      }
    }
  }, [color, step, width, height])

  return (
    <div className='grid-canvas-wrapper'>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default BuilderGrid;