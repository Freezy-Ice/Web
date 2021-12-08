import IAction from '../../Interface/IAction';
import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import { ProductState } from '../../Interface/BusinessShop/Product/ProductInterface';
import { ShopDetails, ShopsIndex } from '../../Interface/BusinessShop/ShopInterface';

import { BusinessShopState } from '../../Interface/BusinessShop';
import shopInitialState from '../../InitialState/BusinessShop/ShopInitialState';

export type BusinessShopType =
    | IAction<ActionsEnums.GET_PRODUCTS, ProductState>
    | IAction<ActionsEnums.GET_BUSINESS_SHOP_DETAILS, ShopDetails>
    | IAction<ActionsEnums.GET_BUSINESS_SHOPS, ShopsIndex>;
export default function reducerBuisnessShop(
    state: BusinessShopState = shopInitialState,
    action: BusinessShopType,
): BusinessShopState {
    switch (action.type) {
        case ActionsEnums.GET_PRODUCTS:
            return { ...state, productListState: action.payload };
        case ActionsEnums.GET_BUSINESS_SHOP_DETAILS:
            return { ...state, shopDetails: action.payload };
        case ActionsEnums.GET_BUSINESS_SHOPS:
            return { ...state, shopsListState: action.payload };
        default:
            return state;
    }
}
