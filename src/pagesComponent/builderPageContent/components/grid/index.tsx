/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useRef, useEffect } from "react";
import './style.scss';
import { useWindowSize } from "react-use";

import { useAppSelector } from "@store/hooks";
import { getGridProperties } from "@store/grid/selectors";
import { drawCanvasLine } from "@helpers/drawCanvas";
import { getIsGridVisible } from "@store/builder/selectors";

const BuilderGrid = () => {
  const canvasRef = useRef(null);
  const isGridVisible = useAppSelector(getIsGridVisible);
  const { width, height } = useWindowSize();
  const { color, step, alpha } = useAppSelector(getGridProperties);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      canvasRef.current.width = width;
      canvasRef.current.height = height;

      const gridColor = color
      const gridStep = step
      const gridAlpha = isGridVisible ? alpha : 0

      for (let i = 0; i < width / step; i++) {
        drawCanvasLine({ ctx, index: i, isVertical: true, gridColor, gridStep, alpha: gridAlpha })
      }
      for (let i = 0; i < height / step; i++) {
        drawCanvasLine({ ctx, index: i, gridColor, gridStep, alpha: gridAlpha })
      }
    }
  }, [color, alpha, step, width, height, isGridVisible])

  return (
    <div className='grid-canvas-wrapper'>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default BuilderGrid;