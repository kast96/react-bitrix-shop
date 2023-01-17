import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Popups } from './components/Popups/Popups'
import { MainLayout } from './components/layouts/MainLayout'
import { getProfile } from './redux/reducers/profile.slice'
import { AppDispatch } from './redux/store'
import { Catalog } from './components/pages/Catalog'
import { CatalogDetail } from './components/pages/CatalogDetail'

function App() {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(getProfile())
	}, [dispatch])
	
	return (
		<>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route path="" element={<>Home</>} />
					<Route path="/catalog/" element={<Catalog />} />
					<Route path="/catalog/:id" element={<CatalogDetail />} />
					<Route path="*" element={<>404</>} />
				</Route>
			</Routes>

			<Popups />
		</>
	)
}

export default App