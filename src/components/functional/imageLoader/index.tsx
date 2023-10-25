import { ReactNode, FC } from "react";

type ImageLoaderProps = {
  children?: ReactNode
}

const ImageLoader: FC<ImageLoaderProps> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}

export default ImageLoader;