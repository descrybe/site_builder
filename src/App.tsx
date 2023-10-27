import './App.css'
import SimpleWrapper from './components/ui/wrapper/simpleWrapper'
import ImageLoader from './components/functional/imageLoader'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useAppSelector } from './store/hooks'
import { getBlocksIds } from './store/blocks/selectors'
import BlockCreationButton from './components/functional/blockCreationButton'

// TODO: вынести блоки в отдельный контейнер

function App() {
  const blocksIds = useAppSelector(getBlocksIds);

  return (
    <>
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

export default App
