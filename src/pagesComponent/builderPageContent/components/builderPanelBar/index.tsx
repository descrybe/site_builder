import { FC } from 'react'
import cn from 'classnames'
import './style.scss'

import BlockCreationButton from '../blockCreationButton'
import DeleteButton from '../deleteButton'

const BuilderPanelBar: FC = () => {
  return (
    <ul className={cn('builder-panel-bar__wrapper')}>
      <li>
        <BlockCreationButton />
      </li>
      <li>
        <DeleteButton />
      </li>
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