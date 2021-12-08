import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import { CreateShopInterface } from '../../Interface/BusinessShop/CreateShopInterface';
import { BusinessShopDetailsInterface } from '../../Interface/BusinessShop/ShopInterface';
import {
    CreateShop,
    DeleteBusinessShop,
    GetBusinessShopDetails,
    GetBusinessShops,
    GetProductList,
    UpdateBusinessShop,
} from '../../Service/BusinessShop/BussinesShopService';

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

export async function FetchBusinessShopDetails(dispatch: any, shopId: string) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await GetBusinessShopDetails(shopId);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_BUSINESS_SHOP_DETAILS,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}

export async function FetchBusinessShops(dispatch: any, currentPage: number) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await GetBusinessShops(currentPage);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_BUSINESS_SHOPS,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}

export async function UpdateShop(
    dispatch: any,
    shopId: string,
    payload: BusinessShopDetailsInterface,
) {
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await UpdateBusinessShop(shopId, payload);
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await GetBusinessShopDetails(shopId);
}

export async function RemoveShop(dispatch: any, shopId: string, currentPage: number) {
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    await DeleteBusinessShop(shopId);
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    await GetBusinessShops(currentPage);
}

export async function AddShop(dispatch: any, payload: CreateShopInterface, currentPage: number) {
    dispatch({
        type: ActionsEnums.SAVING,
    });
    const result = await CreateShop(payload);
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await GetBusinessShops(currentPage);
}
