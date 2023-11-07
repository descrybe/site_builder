import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import './style.scss'

import { useAppSelector } from '@store/hooks'
import { getBlocksIds } from '@store/blocks/selectors'
import { getIsSidePanelVisible } from '@store/builder/selectors'

import SimpleWrapper from '@components/ui/wrapper/simpleWrapper'
import ImageLoader from '@components/functional/imageLoader'
import BuilderPanelBar from './components/builderPanelBar'
import BuilderGrid from './components/grid'
import GridParamsPanel from './components/grid/components/gridParamsPanel'
import SidePanel from './components/sidePanel'

const BuilderPageContent = () => {
  const blocksIds = useAppSelector(getBlocksIds);
  const isSidePanelVisible = useAppSelector(getIsSidePanelVisible);

  return (
    <div className='builder-page-content'>
      {isSidePanelVisible && <SidePanel />}
      <BuilderGrid />
      <GridParamsPanel />
      {/* TODO: Вынести зону редактирования в отдельный блок */}
      <DragDropContext onDragEnd={() => console.log('test')}>
        <Droppable droppableId='root' type='group'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {blocksIds.map(id => (
                <Draggable draggableId={`block${id}`} key={`draggable${id}`} index={id}>
                  {(provided) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <SimpleWrapper id={id} isCentered>
                        <ImageLoader>Image loader {id}</ImageLoader>
                      </SimpleWrapper>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
        <BuilderPanelBar />
      </DragDropContext>
    </div>
  )
}

export default BuilderPageContent;