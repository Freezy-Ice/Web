import { RootState } from '.';

export const commonState = (state: RootState) => state.common;
export const productState = (state: RootState) => state.shopState.productListState;
export const shopDetailsState = (state: RootState) => state.shopState.shopDetails;
export const shopsState = (state: RootState) => state.shopState.shopsListState;
export const categoriesState = (state: RootState) => state.dictionaryState.categoriesListState;
export const citiesState = (state: RootState) => state.dictionaryState.citiesListState;
export const flavorsState = (state: RootState) => state.dictionaryState.flavorsListState;
export const ratingsState = (state: RootState) => state.shopState.ratingsListState;
export const tokenState = (state: RootState) => state.authState.tokenState;
export const businessShopDetailsState = (state: RootState) => state.businessShopState.shopDetails;
export const businessShopState = (state: RootState) => state.businessShopState.shopsListState;
export const businessProductState = (state: RootState) => state.businessShopState.productListState;
