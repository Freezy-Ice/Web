import { RootState } from '.';

export const commonState = (state: RootState) => state.common;
export const productState = (state: RootState) => state.shopState.productListState;
export const shopDetailsState = (state: RootState) => state.shopState.shopDetails;
export const shopsState = (state: RootState) => state.shopState.shopsListState;
export const categoriesState = (state: RootState) => state.dictionaryState.categoriesListState;
export const citiesState = (state: RootState) => state.dictionaryState.citiesListState;
export const flavorsState = (state: RootState) => state.dictionaryState.flavorsListState;
export const ratingsState = (state: RootState) => state.shopState.ratingsListState;
export const userProfileState = (state: RootState) => state.profileState.userProfileState;
export const userFavouriteShopsState = (state: RootState) => state.profileState.favouriteShopsState;
export const userRatingsState = (state: RootState) => state.profileState.ratingState;
