import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import { CreateRatingModel } from '../../Service/Shop/Models/CreateRatingModel';
import {
    DislikeShop,
    GetProductList,
    GetRatings,
    GetShopDetails,
    GetShops,
    LikeShop,
    PostRating,
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
