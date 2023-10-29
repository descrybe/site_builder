import { FC } from 'react'
import cn from 'classnames'
import './style.css'
import HeaderLeftMenu from './components/leftMenu'

type THeaderProps = {
  isHidden?: boolean
}

const PageHeader: FC<THeaderProps> = (props) => {
  const { isHidden = false } = props;

  const headerContent = (
    <div className={cn('header-wrapper')}>
      <HeaderLeftMenu />
    </div>
  )

  return (
    <>{!isHidden && headerContent}</>
  )
}

export default PageHeader;