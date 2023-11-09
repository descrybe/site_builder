import React, { useRef, DragEvent } from 'react';
import cn from 'classnames';
import './style.scss';

import { useAppSelector } from '@store/hooks';
import { getIsHeaderVisible } from '@store/layout/selectors';

const SidePanel = () => {
  const [initialPos, setInitialPos] = React.useState(200);
  const [initialSize, setInitialSize] = React.useState(200);
  const draggableRef = useRef(null);
  const sideBarRef = useRef(null);
  const isHeaderVisible = useAppSelector(getIsHeaderVisible);

  // TODO: пофиксить типы и добавить проверки, отрефакторить функции

  const dragStartHandler = (e: DragEvent): void => {
    const resizableSideBar = sideBarRef.current;
    setInitialPos(e.clientX);
    setInitialSize(resizableSideBar.offsetWidth);
  };

  const resizeDragHandler = (e: DragEvent): void => {
    const resizableSideBar = sideBarRef.current;

    if (resizableSideBar) {
      resizableSideBar.style.width = `${initialSize + e.clientX - initialPos}px`;
    }
  };

  const draggableMoveHandler = (e: DragEvent): void => {
    const draggableLine = draggableRef.current;

    if (draggableLine) {
      draggableLine.style.left = `${e.clientX}px`;
    }
  };

  return (
    <div ref={sideBarRef} className={cn({
      'side-panel': true,
      'side-panel--full-height': !isHeaderVisible
    })}>
      <header>
        <div>Header</div>
      </header>
      <div className='side-panel__components-list-wrapper'>
        <div className=''>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <div className=''>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
      <div
        className='side-panel__drag-line'
        onDragStart={dragStartHandler}
        onDrag={resizeDragHandler}
        onDragEnd={draggableMoveHandler}
        ref={draggableRef}
        draggable
      />
    </div>
  )
}

export default SidePanel;