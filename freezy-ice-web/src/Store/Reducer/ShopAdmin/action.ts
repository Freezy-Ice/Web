import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import { GetNotApprovedShops, PostApprovedShop } from '../../Service/AdminShop/AdminShopService';

export async function PostAcceptedShop(dispatch: any, shopId: string, currentPage: number) {
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    await PostApprovedShop(shopId);
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    await GetNotApprovedShops(currentPage);
}

export async function GetUnacceptedShops(dispatch: any, currentPage: number) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await GetNotApprovedShops(currentPage);
    console.log('action', result);

    dispatch({
        payload: result,
        type: ActionsEnums.GET_UNACCEPTED_SHOPS,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}