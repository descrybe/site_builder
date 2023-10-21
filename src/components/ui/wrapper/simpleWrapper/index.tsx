import { FC, ReactNode } from 'react'
import cn from 'classnames'
import './style.css'

type SimpleWrapperProps = {
	children: ReactNode
	isCentered?: boolean
}

const SimpleWrapper: FC<SimpleWrapperProps> = ({ children, isCentered }) => {
	return (
		<div className='wrapper-container'>
			<div className={cn({
					'wrapper-content': true,
					centered: isCentered,
				})}
			>
				{children}
			</div>
		</div>
	)
}

export default SimpleWrapper;