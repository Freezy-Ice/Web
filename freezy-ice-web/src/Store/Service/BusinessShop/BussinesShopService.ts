import { CreateShopInterface } from '../../Interface/BusinessShop/CreateShopInterface';
import { BusinessShopDetailsInterface } from '../../Interface/BusinessShop/ShopInterface';
import { SendGetRequest, SendPostRequest, SendPutRequest, SendDeleteRequest } from '../AppService';
import CreateShopModel from './Models/CreateShopModel';
import UpdateShopModel from './Models/UpdateShopModel';

const perPage = `${process.env.PER_PAGE}`;
const url = `${process.env.REACT_APP_API_URL}`;

export const GetProductList = async (shopId: string) =>
    SendGetRequest(`${url}/business/shops/${shopId}/products`);

export const GetBusinessShopDetails = async (shopId: string) =>
    SendGetRequest(`${url}/business/shops/${shopId}`);

export const GetBusinessShops = async (currentPage: number) =>
    SendGetRequest(`${url}/business/perPage=${5}&currentPage=1${currentPage}`);

export const UpdateBusinessShop = async (shopId: string, payload: UpdateShopModel) =>
    SendPutRequest(`${url}/business/shops/${shopId}`, payload);

export const DeleteBusinessShop = async (shopId: string) =>
    SendDeleteRequest(`${url}/business/shops/${shopId}`);

export const CreateShop = async (payload: CreateShopModel) =>
    SendPostRequest(`${url}/business/shops`, payload);
