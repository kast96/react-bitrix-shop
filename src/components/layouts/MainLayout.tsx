import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

export const MainLayout = () => {
	return (
		<div className="wrapper main">
			<Header />
			<div className="content">
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}