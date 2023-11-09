import './style.scss'

import { useAppSelector } from '@store/hooks'
import { getIsSidePanelVisible } from '@store/builder/selectors'

import BuilderGrid from './components/grid'
import GridParamsPanel from './components/grid/components/gridParamsPanel'
import SidePanel from './components/sidePanel'
import BuilderPanelBar from './components/builderPanelBar'
import BuilderWindow from './components/builderWindow'

const BuilderPageContent = () => {
  const isSidePanelVisible = useAppSelector(getIsSidePanelVisible);

  return (
    <div className='builder-page-content'>
      {isSidePanelVisible && <SidePanel />}
      <BuilderWindow />
      <BuilderGrid />
      <GridParamsPanel />
      {/* TODO: переименовать в нормальный компонент */}
      <BuilderPanelBar />
    </div>
  )
}

export default BuilderPageContent;