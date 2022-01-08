import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import adminShopInitialState from '../../InitialState/AdminShop/AdminShopInitialState';
import { AdminState } from '../../Interface/AdminShop';
import { AdminShopsState } from '../../Interface/AdminShop/AdminShopInterface';
import IAction from '../../Interface/IAction';

export type AdminShopType = IAction<ActionsEnums.GET_UNACCEPTED_SHOPS, AdminShopsState>;
export default function reducerAdmin(
    state: AdminState = adminShopInitialState,
    action: AdminShopType,
): AdminState {
    switch (action.type) {
        case ActionsEnums.GET_UNACCEPTED_SHOPS:
            return { ...state, adminShops: action.payload };
        default:
            return state;
    }
}
