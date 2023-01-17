import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import s from './MainMenu.module.scss'

export const MainMenu = () => {
	return (
		<ul className={s.menu}>
			<Item title='Главная' to='/' />
			<Item title='Каталог' to='/catalog/' />
		</ul>
	)
}

type PropsType = {
	title: string
	to: string
}

const Item: FC<PropsType> = ({title, to}) => {
	return (
		<li className={s.item}>
			<NavLink to={to} className={s.link}>{title}</NavLink>
		</li>
	)
}