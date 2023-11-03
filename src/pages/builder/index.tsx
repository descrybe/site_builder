import './style.css'
import cn from 'classnames'
import { useAppSelector } from '@store/hooks';

import PageHeader from '@pagesComponent/pageHeader';
import BuilderPageContent from '@pagesComponent/builderPageContent';
import { getIsHeaderVisible } from '@store/layout/selectors';

const BuilderPage = () => {
  const isHeaderVisible = useAppSelector(getIsHeaderVisible)

  return (
    <div
      id='builder-page-wrapper'
      className={cn({ hiddenHeader: !isHeaderVisible })}
    >
      <PageHeader isPossibleToHide />
      <BuilderPageContent />
    </div>
  )
}

export default BuilderPage;
