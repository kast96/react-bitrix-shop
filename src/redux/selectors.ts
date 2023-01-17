import { RootState } from "./store";

export const selectProfile = (state: RootState) => state.profile
export const selectPopupIsOpenedAuth = (state: RootState) => state.toggle.isOpenedPopupAuth
export const selectPopupIsOpenedProfile = (state: RootState) => state.toggle.isOpenedPopupProfile
export const selectCatalogItems = (state: RootState) => state.catalog.products.items
export const selectCatalogItemsStatus = (state: RootState) => state.catalog.productsStatus
export const selectCatalogItemsPagination = (state: RootState) => state.catalog.products.pagination
export const selectCatalogItem = (state: RootState) => state.catalog.product
export const selectCatalogItemStatus = (state: RootState) => state.catalog.productStatus