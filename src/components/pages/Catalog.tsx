import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getProducts } from "../../redux/reducers/catalog.slice"
import { selectCatalogItems, selectCatalogItemsStatus } from "../../redux/selectors"
import { AppDispatch } from "../../redux/store"

export const Catalog = () => {
	const status = useSelector(selectCatalogItemsStatus)
	const items = useSelector(selectCatalogItems)
	//const pagination = useSelector(selectCatalogItemsPagination)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(getProducts())
	}, [dispatch])

	return (
		<div className="wrapper">
			{status === 'loading' && <div>Загрузка...</div>}
			{status === 'error' && <div>Ошибка загрузки</div>}
			{status === 'success' && 
				<>
					{items.map(item => 
						<div key={item.ID}>
							<Link to={`${item.ID}`}>
								{item.NAME}
							</Link>
						</div>	
					)}
				</>
			}
		</div>
	)
}