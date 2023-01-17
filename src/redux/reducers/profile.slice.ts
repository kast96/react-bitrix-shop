import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RequestStatus, ResponseType } from '../../types/types'
import { api } from '../../api/api'

export type ProfileType = {
	id: number
	login: string
}

export type AuthType = {
	login: string
	password: string
}

export type ProfileResponseType = {
	id: number
	login: string
}

export type AuthResponseType = {
	accessToken: string
}

export type ProfileStateType = {
	profile: ProfileType | null
	profileStatus: RequestStatus
	authStatus: RequestStatus
}

const initialState: ProfileStateType = {
	profile: null,
	profileStatus: 'loading',
	authStatus: 'success',
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		logout: (state) => {
			localStorage.removeItem('accessToken')
			state.profile = null
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(auth.pending, (state) => {
				state.authStatus = 'loading'
			})
			.addCase(auth.fulfilled, (state, action: PayloadAction<ResponseType<AuthResponseType>>) => {
				state.authStatus = 'success'
			})
			.addCase(auth.rejected, (state) => {
				state.authStatus = 'error'
			})

			.addCase(getProfile.pending, (state) => {
				state.profileStatus = 'loading'
			})
			.addCase(getProfile.fulfilled, (state, action: PayloadAction<ResponseType<ProfileResponseType>>) => {
				if (action.payload.status === 'success') {
					state.profile = action.payload.data
				} else {
					state.profile = null
				}
				state.profileStatus = 'success'
			})
			.addCase(getProfile.rejected, (state) => {
				state.profileStatus = 'error'
			})
	}
})

export const getProfile = createAsyncThunk(
	'app/profile/getProfileStatus',
	async () => {
		const {data} = await api.get<ResponseType<ProfileResponseType>>(`/api/v1/profile`)
		return data
	}
)

export const auth = createAsyncThunk(
	'app/profile/authStatus',
	async ({login, password, callback}: AuthType & {callback?: (response: ResponseType<AuthResponseType>) => void}, thunkAPI) => {
		const {data} = await api.post<ResponseType<AuthResponseType>>(`/api/v1/auth`, {login, password})

		if (data?.data?.accessToken) {
			localStorage.setItem('accessToken', data.data.accessToken)
			thunkAPI.dispatch(getProfile())
		}

		if (callback) callback(data)
		return data
	}
)

export const { logout } = profileSlice.actions

export const profileReducer = profileSlice.reducer;