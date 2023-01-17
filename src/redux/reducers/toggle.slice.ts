import {createSlice} from '@reduxjs/toolkit'

export type ToggleStateType = {
	isOpenedPopupAuth: boolean
	isOpenedPopupProfile: boolean
}

const initialState: ToggleStateType = {
	isOpenedPopupAuth: false,
	isOpenedPopupProfile: false,
}

export const toggleSlice = createSlice({
	name: 'toggle',
	initialState,
	reducers: {
		setIsOpenedPopupAuth: (state, action) => {
			state.isOpenedPopupAuth = action.payload
		},
		setIsOpenedPopupProfile: (state, action) => {
			state.isOpenedPopupProfile = action.payload
		}
	}
})

export const {
	setIsOpenedPopupAuth,
	setIsOpenedPopupProfile
} = toggleSlice.actions;

export const toggleReducer = toggleSlice.reducer