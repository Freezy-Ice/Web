import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import { ProductInterface } from '../../Interface/BusinessShop/Product/CompanyProductInterface';
import ProductModel from '../../Service/Product/Model/ProductModel';
import {
    CreateProduct,
    DeleteProduct,
    EditProduct,
    GetProduct,
    GetProductList,
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

export async function FetchProduct(dispatch: any, shopId: string, productId: string) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await GetProduct(shopId, productId);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_PRODUCTS,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}

export async function UpdateProduct(
    dispatch: any,
    shopId: string,
    productId: string,
    payload: ProductModel,
) {
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await EditProduct(shopId, productId, payload);
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await FetchProductsList(dispatch, shopId);
}

export async function RemoveProduct(dispatch: any, shopId: string, productId: string) {
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    await DeleteProduct(shopId, productId);
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    await FetchProductsList(dispatch, shopId);
}

export async function AddProduct(dispatch: any, shopId: string, payload: ProductModel) {
    dispatch({
        type: ActionsEnums.SAVING,
    });
    console.log(payload);

    const result = await CreateProduct(shopId, payload);
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await FetchProductsList(dispatch, shopId);
}
