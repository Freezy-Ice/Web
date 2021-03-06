import IAction from '../../Interface/IAction';
import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import shopInitialState from '../../InitialState/Shop/ShopInitialState';
import { ShopState } from '../../Interface/Shop';
import { ProductState } from '../../Interface/Shop/Product/ProductInterface';
import { ShopDetails, ShopsIndex } from '../../Interface/Shop/ShopInterface';
import { RatingState } from '../../Interface/Shop/Rate/RateInterface';

export type ProductType =
    | IAction<ActionsEnums.GET_PRODUCTS, ProductState>
    | IAction<ActionsEnums.GET_SHOP_DETAILS, ShopDetails>
    | IAction<ActionsEnums.GET_RATINGS, RatingState>
    | IAction<ActionsEnums.GET_SHOPS, ShopsIndex>;
export default function reducerProduct(
    state: ShopState = shopInitialState,
    action: ProductType,
): ShopState {
    switch (action.type) {
        case ActionsEnums.GET_PRODUCTS:
            return { ...state, productListState: action.payload };
        case ActionsEnums.GET_SHOP_DETAILS:
            return { ...state, shopDetails: action.payload };
        case ActionsEnums.GET_SHOPS:
            return { ...state, shopsListState: action.payload };
        case ActionsEnums.GET_RATINGS:
            return { ...state, ratingsListState: action.payload };
        default:
            return state;
    }
}
