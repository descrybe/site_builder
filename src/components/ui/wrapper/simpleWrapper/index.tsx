import { DragEvent, FC, ReactNode } from 'react'
import cn from 'classnames'
import './style.css'

import BlockSettings from '@components/functional/blockSettings'
import { useAppSelector } from '@store/hooks'
import { getActiveBlockId } from '@store/blocks/selectors'
import { useDispatch } from 'react-redux'
import { setActiveId } from '@store/blocks'

type SimpleWrapperProps = {
  children: ReactNode
  isCentered?: boolean
  id: number
}

const SimpleWrapper: FC<SimpleWrapperProps> = ({ children, isCentered, id }) => {
  const dispatch = useDispatch();
  const activeId = useAppSelector(getActiveBlockId);
  const isBlockActive = id === activeId;
  const dragEndHandler = (event: DragEvent<HTMLDivElement>): void => {
    console.log(event)
  }

  const blockClickHandler = (): void => {
    dispatch(setActiveId(id))
  }

  return (
    <div
      className='wrapper-container'
      onDragEnd={e => dragEndHandler(e)}
      onClick={blockClickHandler}
    >
      <div className={cn({
          'wrapper-content': true,
          centered: isCentered,
        })}
      >
        {children}
      </div>

      {isBlockActive && <BlockSettings id={id} />}    
    </div>
  )
}

export default SimpleWrapper;