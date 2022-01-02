import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import { CreateShopInterface } from '../../Interface/BusinessShop/CreateShopInterface';
import { ProductInterface } from '../../Interface/BusinessShop/Product/CompanyProductInterface';
import { BusinessShopDetailsInterface } from '../../Interface/BusinessShop/ShopInterface';
import {
    GetBusinessShopDetails,
    GetProductList,
} from '../../Service/BusinessShop/BussinesShopService';
import ProductModel from '../../Service/Product/Model/ProductModel';
import {
    CreateProduct,
    DeleteProduct,
    EditProduct,
    GetProduct,
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
    await GetProduct;
}

export async function RemoveProduct(dispatch: any, shopId: string, productId: string) {
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    await DeleteProduct(shopId, productId);
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    await GetProductList(shopId);
}

export async function AddProduct(dispatch: any, shopId: string, payload: ProductModel) {
    dispatch({
        type: ActionsEnums.SAVING,
    });
    const result = await CreateProduct(shopId, payload);
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await GetProductList(shopId);
}
