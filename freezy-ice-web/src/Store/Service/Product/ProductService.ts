import { ProductInterface } from '../../Interface/BusinessShop/Product/CompanyProductInterface';
import { SendGetRequest, SendPostRequest, SendPutRequest, SendDeleteRequest } from '../AppService';
import ProductModel from './Model/ProductModel';

const perPage = `${process.env.PER_PAGE}`;
const url = `${process.env.REACT_APP_API_URL}`;

export const GetProductList = async (shopId: string) =>
    SendGetRequest(`${url}/business/shops/${shopId}/products`);

export const CreateProduct = async (shopId: string, payload: ProductModel) =>
    SendPostRequest(`${url}/business/shops/${shopId}/products`, payload);

export const GetProduct = async (shopId: string, productId: string) =>
    SendGetRequest(`${url}/business/shops/${shopId}/products/${productId}`);

export const EditProduct = async (shopId: string, productId: string, payload: ProductModel) =>
    SendPutRequest(`${url}/business/shops/${shopId}/products/${productId}`, payload);

export const DeleteProduct = async (shopId: string, productId: string) =>
    SendDeleteRequest(`${url}/business/shops/${shopId}/products/${productId}`);
