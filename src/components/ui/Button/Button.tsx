import { FC, ReactElement } from "react"
import s from "./Button.module.scss"

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string
	icon?: ReactElement<any, any>
	theme?: 'line'
	size?: 'sm' | 'lg'
}

export const Button: FC<PropsType> = ({text, icon, theme, size, ...props}) => {
	return (
		<button className={[s.button, theme, size].join(' ')} {...props}>
			<>
				<span className={s.icon}>{icon}</span>
				<span className={s.text}>{text}</span>
			</>
		</button>
	)
}