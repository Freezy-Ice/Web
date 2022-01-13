import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import { CreateRatingModel } from '../../Service/Shop/Models/CreateRatingModel';
import { FilterModel } from '../../Service/Shop/Models/FilterModel';
import {
    DislikeShop,
    GetFilteredShops,
    GetProductList,
    GetRatings,
    GetShopDetails,
    GetShops,
    LikeShop,
    PostRating,
    RemoveRatings,
} from '../../Service/Shop/ShopService';

export async function FetchProductsList(dispatch: any, shopId: string) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await GetProductList(shopId);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_PRODUCTS,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}

export async function FetchShopDetails(dispatch: any, shopId: string) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await GetShopDetails(shopId);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_SHOP_DETAILS,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}

export async function FetchShops(dispatch: any, currentPage: number) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await GetShops(currentPage);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_SHOPS,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}

export async function PostLikeAndDislikeShop(dispatch: any, shopId: string, favourite: boolean) {
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    if (!favourite) await LikeShop(shopId);
    else await DislikeShop(shopId);
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    await FetchShopDetails(dispatch, shopId);
}

export async function FetchRatings(dispatch: any, currentPage: number, shopId: string) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await GetRatings(currentPage, shopId);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_RATINGS,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}

export async function CreateRating(dispatch: any, shopId: number, ratingModel: CreateRatingModel) {
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await PostRating(shopId, ratingModel);
    dispatch({
        type: ActionsEnums.SAVING,
    });
}

export async function DeleteRating(
    dispatch: any,
    ratingId: string,
    currentPage: number,
    shopId: string,
) {
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    await RemoveRatings(ratingId);
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    await FetchRatings(dispatch, currentPage, shopId);
}

export async function FetchFilteredShops(dispatch: any, currentPage: number, filter: FilterModel) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const filterUrl: string = `/shops?perPage=${5}&currentPage=${currentPage}${
        filter.search.length > 0 ? `&search=${filter.search}` : ''
    }${filter.category !== null ? `&category=${filter.category}` : ''}
    ${filter.flavor !== null ? `&flavor=${filter.flavor}` : ''}
    ${filter.priceMin !== null ? `&priceMin=${filter.priceMin * 100}` : ''}
    ${filter.priceMax !== null ? `&PriceMax=${filter.priceMax * 100}` : ''}
    ${filter.city ? `&city=${filter.city}` : ''}
`;
    const result = await GetFilteredShops(filterUrl);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_SHOPS,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}
