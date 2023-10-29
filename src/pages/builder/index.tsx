import './style.css'
import SimpleWrapper from '../../components/ui/wrapper/simpleWrapper'
import ImageLoader from '../../components/functional/imageLoader'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useAppSelector } from '../../store/hooks'
import { getBlocksIds } from '../../store/blocks/selectors'
import BlockCreationButton from '../../components/functional/blockCreationButton'
import PageHeader from '../../pagesComponent/pageHeader'

// TODO: вынести блоки в отдельный контейнер

const BuilderPage = () => {
  const blocksIds = useAppSelector(getBlocksIds);

  return (
    <>
      <PageHeader />
      <BlockCreationButton />
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
                      <SimpleWrapper
                      isCentered
                    >
                      <ImageLoader>Image loader {id}</ImageLoader>
                    </SimpleWrapper>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

export default BuilderPage;
