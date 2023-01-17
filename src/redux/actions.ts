import {logout} from "./reducers/profile.slice"
import {setIsOpenedPopupAuth, setIsOpenedPopupProfile} from "./reducers/toggle.slice"

export const actions = {
	logout,
	setIsOpenedPopupAuth,
	setIsOpenedPopupProfile
}