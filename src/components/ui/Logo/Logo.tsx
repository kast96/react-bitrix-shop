import s from './Logo.module.scss'
import imgLogo from '../../../images/logo.webp'
import { config } from '../../../config'
import { Link } from 'react-router-dom'

export const Logo = () => {
	return (
		<Link to="/">
			<img className={s.logo} src={imgLogo} alt={config.siteName} />
		</Link>
	)
}