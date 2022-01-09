import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import {
    DeleteUserRating,
    GetFavouriteShops,
    GetUserInfo,
    GetUserRatings,
} from '../../Service/Profile/ProfileService';

export async function FetchUserProfile(dispatch: any) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await GetUserInfo();
    dispatch({
        payload: result,
        type: ActionsEnums.GET_USER_PROFILE,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}

export async function FetchFavouriteShops(dispatch: any, currentPage: number) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await GetFavouriteShops(currentPage);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_FAVOURITE_SHOPS,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}

export async function FetchUserRatings(dispatch: any, currentPage: number) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await GetUserRatings(currentPage);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_USER_RATINGS,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}

export async function RemoveUserRating(dispatch: any, shopId: number) {
    dispatch({
        type: ActionsEnums.SAVING,
    });
    const result = await DeleteUserRating(shopId);
    dispatch({
        type: ActionsEnums.SAVING,
    });
}
