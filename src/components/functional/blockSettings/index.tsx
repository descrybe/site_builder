import { FC } from 'react'
import { useDispatch } from 'react-redux';
import './style.scss';
import { removeBlockById } from '@store/blocks';

type TBlockSettingsProps = {
  id: number
}

const BlockSettings: FC<TBlockSettingsProps> = ({ id }) => {
  const dispatch = useDispatch();

  const removeBlockHandler = (): void => {
    dispatch(removeBlockById(id))
  }

  const copyBlockHandler = (): void => {

  }

  return (
    <ul className='block-settings-wrapper'>
      <li>
        <button onClick={copyBlockHandler}>C</button>
      </li>
      <li>
        <button onClick={removeBlockHandler}>X</button>
      </li>
    </ul>
  )
}

export default BlockSettings;