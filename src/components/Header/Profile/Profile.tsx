import s from './Profile.module.scss'
import { FaUserCircle } from 'react-icons/fa'
import { Button } from '../../ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { selectProfile } from '../../../redux/selectors'
import { actions } from '../../../redux/actions'

export const Profile = () => {
	const {profile} = useSelector(selectProfile)
	const dispatch = useDispatch<AppDispatch>()

	const openAuthHandler = () => {
		dispatch(actions.setIsOpenedPopupAuth(true))
	}

	const openProfileHandler = () => {
		dispatch(actions.setIsOpenedPopupProfile(true))
	}

	return (
		<div className={s.profile}>
			{profile && 
				<Button text={profile.login} icon={<FaUserCircle />} onClick={openProfileHandler} />
			}
			{!profile && 
				<Button text={'Войти'} icon={<FaUserCircle />} onClick={openAuthHandler} />
			}
		</div>
	)
}