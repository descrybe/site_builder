import { useDispatch } from 'react-redux';
import './style.scss';


// TODO: добавить алиасы
import { setIsHeaderVisible } from '../../../../store/layout';

const ExpandButton = () => {
  const dispatch = useDispatch();

  const expandButtonHandler = (): void => {
    dispatch(setIsHeaderVisible(true))
  }

  return (
    <div className='expand-button-wrapper'>
      <button className='expand-button' onClick={expandButtonHandler}>s</button>
    </div>
  )
};

export default ExpandButton;