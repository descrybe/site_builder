import { removeAllBlocks } from "@store/blocks"
import { useDispatch } from "react-redux"
import './style.scss'

const DeleteButton = () => {
  const dispatch = useDispatch()

  const deleteButtonHandler = (): void => {
    dispatch(removeAllBlocks())
  }

  return (
    <button className='delete-button' onClick={deleteButtonHandler}>XXX</button>
  )
}

export default DeleteButton;