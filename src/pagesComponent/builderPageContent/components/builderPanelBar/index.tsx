import { FC } from 'react'
import cn from 'classnames'
import './styles.scss'
import BlockCreationButton from '../blockCreationButton'

const BuilderPanelBar: FC = () => {
  return (
    <ul className={cn('builder-panel-bar__wrapper')}>
      <li>
        <BlockCreationButton />
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  )
}

export default BuilderPanelBar;