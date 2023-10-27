import { FC } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { createBlock } from "../../../store/blocks";

const BlockCreationButton: FC = () => {
  const dispatch = useAppDispatch();

  const createBlockHander = (): void => {
    dispatch(createBlock())
  }
  
  return (
    <div>
      <button onClick={createBlockHander}>Добавить блок</button>
    </div>
  )
}

export default BlockCreationButton;