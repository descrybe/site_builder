import { FC } from 'react'
import cn from 'classnames'
import './style.css'
import { Link } from 'react-router-dom'

const HeaderLeftMenu: FC = () => {
  return (
    <ul className={cn('header-left-menu')}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/builder">Examples</Link>
      </li>
    </ul>
  )
}

export default HeaderLeftMenu;