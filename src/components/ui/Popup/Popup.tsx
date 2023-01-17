import { FC, PropsWithChildren } from "react"
import { FaTimes } from "react-icons/fa"
import s from "./Popup.module.scss"

interface PropsType {
	title?: string
	onClose?: () => void
}

export const Popup: FC<PropsWithChildren<PropsType>> = ({title, children, onClose}) => {
	return (
		<div className={s.popup}>
			<div className={s.overlay} onClick={onClose}></div>
			<div className={s.container}>
				<span className={s.close} onClick={onClose}><FaTimes /></span>
				<div className={s.header}>
					<span className={[s.title, 'h4'].join(' ')}>{title}</span>
				</div>
				<div className={s.body}>
					{children}
				</div>
			</div>
		</div>
	)
}