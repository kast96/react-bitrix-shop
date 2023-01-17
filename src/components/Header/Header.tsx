import { Phones } from './Phones/Phones'
import { Logo } from '../ui/Logo/Logo'
import s from './Header.module.scss'
import { Worktime } from './Worktime/Worktime'
import { Profile } from './Profile/Profile'
import { MainMenu } from './MainMenu/MainMenu'

export const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.header_top}>
				<div className={s.logo}>
					<Logo />
				</div>
				<div className={s.phones}>
					<Phones />
				</div>
				<div className={s.worktime}>
					<Worktime />
				</div>
				<div className={s.profile}>
					<Profile />
				</div>
			</div>
			<div className={s.menu}>
				<MainMenu />
			</div>
		</header>
	)
}