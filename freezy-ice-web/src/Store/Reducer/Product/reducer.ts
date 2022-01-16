import IAction from '../../Interface/IAction';
import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import {
    ProductInterface,
    ProductState,
} from '../../Interface/BusinessShop/Product/CompanyProductInterface';
import { ShopDetails, ShopsIndex } from '../../Interface/BusinessShop/ShopInterface';

import { BusinessShopState } from '../../Interface/BusinessShop';
import shopInitialState from '../../InitialState/BusinessShop/ShopInitialState';

export type ProductType =
    | IAction<ActionsEnums.GET_PRODUCTS, ProductState>
    | IAction<ActionsEnums.GET_PRODUCT_DETAILS, ProductInterface>;
export default function reducerProduct(
    state: BusinessShopState = shopInitialState,
    action: ProductType,
): BusinessShopState {
    switch (action.type) {
        case ActionsEnums.GET_PRODUCTS:
            return { ...state, productListState: action.payload };
        case ActionsEnums.GET_PRODUCT_DETAILS:
            return { ...state, productDetails: action.payload };

        default:
            return state;
    }
}
