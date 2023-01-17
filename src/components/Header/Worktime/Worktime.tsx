import s from './Worktime.module.scss'
import { config } from '../../../config'

export const Worktime = () => {
	return (
		<div className={s.worktime}>
			{config.worktime && (
				<>
					<span>Время работы: </span>
					<span>{config.worktime}</span>
				</>
			)}
		</div>
	)
}