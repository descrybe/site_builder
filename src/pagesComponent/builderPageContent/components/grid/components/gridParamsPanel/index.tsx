import { useDispatch } from "react-redux"
import '../../style.scss'

import { changeGridStep, changeGridColor } from "@store/grid"
import { EGridColor, EGridStep } from "@helpers/drawCanvas"

const GridParamsPanel = () => {
  const dispatch = useDispatch()

  const changeSizeHandler = (size: EGridStep): void => {
    dispatch(changeGridStep(size))
  }

  const changeColorHandler = (color: EGridColor): void => {
    dispatch(changeGridColor(color))
  }

  return (
    <div className='grid-params-panel'>
      <h3>Grid</h3>
      <ul className='grid-params-panel__controls'>
        <li>
          <span>Size: &nbsp;</span>
          <button onClick={() => changeSizeHandler(EGridStep.SMALL)}>s</button>
          <button onClick={() => changeSizeHandler(EGridStep.MEDIUM)}>m</button>
          <button onClick={() => changeSizeHandler(EGridStep.BIG)}>b</button>
        </li>
        <li>
          <span>Color: &nbsp;</span>
          <button onClick={() => changeColorHandler(EGridColor.GREY)}>grey</button>
          <button onClick={() => changeColorHandler(EGridColor.BLACK)}>black</button>
          <button onClick={() => changeColorHandler(EGridColor.RED)}>red</button>
        </li>
      </ul>
    </div>
  )
}

export default GridParamsPanel;