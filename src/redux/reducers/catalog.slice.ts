import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PaginationType, RequestStatus, ResponseResultType } from '../../types/types'
import { api } from '../../api/api'

export type ItemType = {
	ID: number
	NAME: string
}

export type ItemResponseType = {
	ID: number
	NAME: string
}

export type ItemsResponseType = {
	items: Array<ItemResponseType>
}

export type CatalogStateType = {
	products: {
		items: Array<ItemType>
		pagination: PaginationType | null
	}
	product: ItemType | null
	productsStatus: RequestStatus
	productStatus: RequestStatus
}

const initialState: CatalogStateType = {
	products: {
		items: [],
		pagination: null,
	},
	product: null,
	productsStatus: 'loading',
	productStatus: 'loading'
}

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.products.items = []
				state.products.pagination = null
				state.productsStatus = 'loading'
			})
			.addCase(getProducts.fulfilled, (state, action: PayloadAction<ResponseResultType<ItemsResponseType>>) => {
				state.products.items = action.payload.data?.result.items || []
				state.products.pagination = action.payload.data?.pagination || null
				state.productsStatus = 'success'
			})
			.addCase(getProducts.rejected, (state) => {
				state.productsStatus = 'error'
			})

			.addCase(getProduct.pending, (state) => {
				state.product = null
				state.productStatus = 'loading'
			})
			.addCase(getProduct.fulfilled, (state, action: PayloadAction<ResponseResultType<ItemResponseType>>) => {
				state.product = action.payload.data?.result || null
				state.productStatus = 'success'
			})
			.addCase(getProduct.rejected, (state) => {
				state.productsStatus = 'error'
			})
	}
})

export const getProducts = createAsyncThunk(
	'app/catalog/getproductsStatus',
	async () => {
		const {data} = await api.get<ResponseResultType<ItemsResponseType>>(`/api/v1/products`)
		return data
	}
)

export const getProduct = createAsyncThunk(
	'app/catalog/getproductStatus',
	async ({id}: {id: number}) => {
		const {data} = await api.get<ResponseResultType<ItemResponseType>>(`/api/v1/products/${id}`)
		return data
	}
)

export const catalogReducer = catalogSlice.reducer;