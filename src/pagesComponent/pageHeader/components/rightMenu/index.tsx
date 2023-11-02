import { useDispatch } from 'react-redux';
import { FC } from 'react';
import './style.scss';
import { setIsHeaderVisible } from '@store/layout';

type TRightHeaderProps = {
  isShowCollapseButton?: boolean
}

const HeaderRightMenu: FC<TRightHeaderProps> = ({ isShowCollapseButton }) => {
  const dispatch = useDispatch()

  const collapseButtonHandler = (): void => {
    dispatch(setIsHeaderVisible(false))
  }

  return (
    <div className={'header-left'}>
      {/* Вынести expandButton в отдельный компонент в components/ */}
      {isShowCollapseButton && (
          <button
            className={'collapse-button'}
            onClick={collapseButtonHandler}
          >^</button>
        )
      }
    </div>
  )
}

export default HeaderRightMenu;