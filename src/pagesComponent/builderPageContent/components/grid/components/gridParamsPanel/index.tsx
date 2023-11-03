// import { changeGridStep } from "@store/grid"
// import { useDispatch } from "react-redux"
import '../../style.scss'

const GridParamsPanel = () => {
  // const dispatch = useDispatch()

  const changeSizeHandler = (): void => {
    // dispatch(changeGridStep())
  }

  const changeColorHandler = (): void => {

  }

  return (
    <div className='grid-params-panel'>
      <button onClick={changeSizeHandler}>Change size</button>
      {/* Сделать выбор цвета сетки: пикер с 2-3 вариантами */}
      <button onClick={changeColorHandler}>Choose grid color</button>
    </div>
  )
}

export default GridParamsPanel;