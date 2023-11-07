import { useDispatch } from 'react-redux';
import cn from 'classnames';
import '../../style.scss';

import { changeGridStep, changeGridColor } from '@store/grid';
import { EGridColor, EGridStep } from '@helpers/drawCanvas';
import { useAppSelector } from '@store/hooks';
import { getIsGridVisible } from '@store/builder/selectors';
import { changeGridVisibility } from '@store/builder';

const GridParamsPanel = () => {
  const dispatch = useDispatch();
  const isGridVisible = useAppSelector(getIsGridVisible)

  const changeSizeHandler = (size: EGridStep): void => {
    dispatch(changeGridStep(size))
  }

  const changeColorHandler = (color: EGridColor): void => {
    dispatch(changeGridColor(color))
  }

  const changeGridVisibilityHandler = (): void => {
    dispatch(changeGridVisibility(!isGridVisible))
  }

  return (
    <div className='grid-params-panel'>
      <div className='grid-params-panel__main-props'>
        <h3>Grid</h3>
        <div className={cn({
          'grid-checkbox': true,
          'grid-checkbox--active': isGridVisible
        })} onClick={changeGridVisibilityHandler}></div>
      </div>
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