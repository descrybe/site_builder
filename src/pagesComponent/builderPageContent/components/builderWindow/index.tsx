import './style.scss';

import EditorArea from './components/editorArea'
import BuilderWindowHeader from './components/header';

const BuilderWindow = () => {

  return (
    <div className='builder-window'>
      <BuilderWindowHeader />
      <EditorArea />
    </div>
  )
}

export default BuilderWindow;
