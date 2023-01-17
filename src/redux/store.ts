import { configureStore } from '@reduxjs/toolkit'
import { catalogReducer } from './reducers/catalog.slice'
import { profileReducer } from './reducers/profile.slice'
import { toggleReducer } from './reducers/toggle.slice'

export const store = configureStore({
	reducer: {
		profile: profileReducer,
		toggle: toggleReducer,
		catalog: catalogReducer
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch