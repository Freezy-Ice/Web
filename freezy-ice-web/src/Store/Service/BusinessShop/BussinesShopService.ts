import { CreateShopInterface } from '../../Interface/BusinessShop/CreateShopInterface';
import { BusinessShopDetailsInterface } from '../../Interface/BusinessShop/ShopInterface';
import { SendGetRequest, SendPostRequest, SendPutRequest, SendDeleteRequest } from '../AppService';
import CreateShopModel from './Models/CreateShopModel';
import UpdateShopModel from './Models/UpdateShopModel';

const perPage = `${process.env.PER_PAGE}`;
const url = `${process.env.REACT_APP_API_URL}`;

export const GetProductList = async (shopId: string) =>
    SendGetRequest(`${url}/ice-cream-shops/${shopId}/products`);

export const GetBusinessShopDetails = async (shopId: string) =>
    SendGetRequest(`${url}/business/ice-cream-shops/${shopId}`);

export const GetBusinessShops = async (currentPage: number) =>
    SendGetRequest(`${url}/business/ice-cream-shops?per_page=${5}&current_page=${currentPage}`);

export const UpdateBusinessShop = async (shopId: string, payload: UpdateShopModel) =>
    SendPutRequest(`${url}/business/ice-cream-shops/${shopId}/like`, payload);

export const DeleteBusinessShop = async (shopId: string) =>
    SendDeleteRequest(`${url}/business/ice-cream-shops/${shopId}`);

export const CreateShop = async (payload: CreateShopModel) =>
    SendPostRequest(`${url}/business/ice-cream-shops`, payload);
