import { FC, ReactNode } from "react";
import { useAppDispatch } from "@store/hooks";
import { createBlock } from "@store/blocks";
import './style.scss'

const BlockCreationButton: FC<{ content?: string | ReactNode }> = ({content}) => {
  const dispatch = useAppDispatch();

  const createBlockHander = (): void => {
    dispatch(createBlock())
  }
  
  return (
    <button
      className='default-button-container'
      onClick={createBlockHander}
    >
      {content}
    </button>
  )
}

export default BlockCreationButton;