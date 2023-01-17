import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../redux/actions"
import { selectPopupIsOpenedAuth, selectPopupIsOpenedProfile } from "../../redux/selectors"
import { AppDispatch } from "../../redux/store"
import { Popup } from "../ui/Popup/Popup"
import { Auth } from "../Forms/Auth"
import { Profile } from "./Popups/Profile"

export const Popups = () => {
	const isOpenedAuth = useSelector(selectPopupIsOpenedAuth)
	const isOpenedProfile = useSelector(selectPopupIsOpenedProfile)
	const dispatch = useDispatch<AppDispatch>()
	
	const closeAuthHandler = () => {
		dispatch(actions.setIsOpenedPopupAuth(false))
	}

	const closeLoguotHandler = () => {
		dispatch(actions.setIsOpenedPopupProfile(false))
	}

	return (
		<div className="popups">
			{isOpenedAuth &&
				<Popup title="Авторизация" onClose={closeAuthHandler}>
					<Auth />
				</Popup>
			}
			{isOpenedProfile &&
				<Popup title="Профиль" onClose={closeLoguotHandler}>
					<Profile />
				</Popup>
			}
		</div>
	)
}