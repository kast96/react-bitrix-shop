import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProduct } from "../../redux/reducers/catalog.slice"
import { selectCatalogItem, selectCatalogItemStatus } from "../../redux/selectors"
import { AppDispatch } from "../../redux/store"

export const CatalogDetail = () => {
	let { id } = useParams();
	
	const status = useSelector(selectCatalogItemStatus)
	const item = useSelector(selectCatalogItem)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		if (id) {
			dispatch(getProduct({id: +id}))
		}
	}, [dispatch, id])
	

	return (
		<div className="wrapper">
			{status === 'loading' && <div>Загрузка...</div>}
			{status === 'error' && <div>Ошибка загрузки</div>}
			{status === 'success' && item && 
				<>
					<h1>{item.NAME}</h1>
					<div>{item.ID}</div>
				</>
			}
		</div>
	)
}