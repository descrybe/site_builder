import { DragEvent, FC, ReactNode } from 'react'
import cn from 'classnames'
import './style.css'

type SimpleWrapperProps = {
  children: ReactNode
  isCentered?: boolean
}

const SimpleWrapper: FC<SimpleWrapperProps> = ({ children, isCentered }) => {
  // TODO: Вынести DnD-функции в общий хук или хелпер
  const dragEndHandler = (event: DragEvent<HTMLDivElement>): void => {
    console.log(event)
  }

  return (
    <div
      className='wrapper-container'
      onDragEnd={e => dragEndHandler(e)}
    >
      <div className={cn({
        'wrapper-content': true,
        centered: isCentered,
      })}
      >
        {children}
      </div>
    </div>
  )
}

export default SimpleWrapper;