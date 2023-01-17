import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../../redux/actions"
import { selectProfile } from "../../../redux/selectors"
import { AppDispatch } from "../../../redux/store"

export const Profile = () => {
	const {profile} = useSelector(selectProfile)
	const dispatch = useDispatch<AppDispatch>()

	const logoutHandler = () => {
		dispatch(actions.logout())
		dispatch(actions.setIsOpenedPopupProfile(false))
		dispatch(actions.setIsOpenedPopupAuth(true))
	}

	return (
		<div>
			{profile &&
				<>
					<div>
						<span>Логин:</span>
						<span>{profile.login}</span>
					</div>
					<button onClick={logoutHandler}>Выйти</button>
				</>
			}
			{!profile &&
				<span>Вы не авторизованы</span>
			}
		</div>
	)
}