import './App.css'
import SimpleWrapper from './components/ui/wrapper/simpleWrapper'
import ImageLoader from './components/functional/imageLoader'

function App() {
  return (
    <>
      <SimpleWrapper isCentered>
        <ImageLoader></ImageLoader>
      </SimpleWrapper>
    </>
  )
}

export default App
