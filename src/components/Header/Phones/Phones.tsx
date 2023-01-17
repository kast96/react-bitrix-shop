import s from './Phones.module.scss'
import { config } from '../../../config'

export const Phones = () => {
	return (
		<ul className={s.phones}>
			{config.phones.map((phone, key) =>
				<li className={s.phone} key={key}>{phone.number}</li>
			)}
		</ul>
	)
}