import './App.css'
import SimpleWrapper from './components/ui/wrapper/simpleWrapper'
import ImageLoader from './components/functional/imageLoader'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

// TODO: сделать хранилище для всех блоков на странице

function App() {
  return (
    <>
      <DragDropContext onDragEnd={() => console.log('test')}>
        <Droppable droppableId='root' type='group'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable draggableId='card1' key='ts1' index={1}>
                {(provided) => (
                  <div
                    {...provided.dragHandleProps} 
                    {...provided.draggableProps} 
                    ref={provided.innerRef}
                  >
                    <SimpleWrapper
                    isCentered
                  >
                  <ImageLoader>Image loader 1</ImageLoader>
                  </SimpleWrapper>
                  </div>
                )}
              </Draggable>
              <Draggable draggableId='card2' key='ts2' index={2}>
                {(provided) => (
                  <div
                    {...provided.dragHandleProps} 
                    {...provided.draggableProps} 
                    ref={provided.innerRef}
                  >
                    <SimpleWrapper isCentered>
                      <ImageLoader>Image loader 2</ImageLoader>
                  </SimpleWrapper>
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

export default App
