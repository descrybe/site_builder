/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useRef, useEffect } from "react";
import './style.scss';
import { drawCanvasLine } from "@helpers/drawCanvas";

// TODO: изменить параметры на правильные значения сетки

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