import { FC } from 'react'
import cn from 'classnames'
import './style.scss'

import { useAppSelector } from '@store/hooks'
import { getIsHeaderVisible } from '@store/layout/selectors'

import ExpandButton from '@components/ui/functionalUiComponents/expandButton'
import HeaderLeftMenu from './components/leftMenu'
import HeaderRightMenu from './components/rightMenu'

type THeaderProps = {
  isPossibleToHide?: boolean
}

// TODO: пофиксить ширину, когда появляется скроллбар
// TODO: перенести из pagesComponent в components/ui/layout

const PageHeader: FC<THeaderProps> = ({ isPossibleToHide }) => {
  const isHeaderVisible = useAppSelector(getIsHeaderVisible)
  const isShowHeader = (isHeaderVisible && isPossibleToHide) || !isPossibleToHide

  const headerContent = (
    <div className={cn('header-wrapper')}>
      <HeaderLeftMenu />
      <HeaderRightMenu isShowCollapseButton={isPossibleToHide}/>
    </div>
  )

  return (
    <>{isShowHeader ? headerContent : <ExpandButton />}</>
  )
}

export default PageHeader;