import './style.css'

import PageHeader from '../../pagesComponent/pageHeader'
import BuilderPageContent from '../../pagesComponent/builderPageContent';

const BuilderPage = () => {
  return (
    <div id='builder-page-wrapper'>
      <PageHeader isPossibleToHide />
      <BuilderPageContent />      
    </div>
  )
}

export default BuilderPage;
