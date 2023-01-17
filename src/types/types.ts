export type ResponseType<D = void> = {
	status: 'success' | 'error'
	data: D | null
	errors: Array<{code: number, message: string, customData: any}>
}

export type ResponseResultType<D = void> = ResponseType<{
	result: D
	pagination?: PaginationType
}>

export type PaginationType = {
	page: number
	count: number
	limit: number
	pageCount: number
}

export type RequestStatus = 'loading' | 'success' | 'error';