import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import {
    DislikeShop,
    GetProductList,
    GetShopDetails,
    GetShops,
    LikeShop,
} from '../../Service/Product/ProductService';

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
