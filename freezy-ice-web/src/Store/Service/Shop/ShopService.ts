import { SendGetRequest, SendPostRequest, SendPostWithoutPayloadRequest } from '../AppService';

const perPage = `${process.env.PER_PAGE}`;
const url = `${process.env.REACT_APP_API_URL}`;

export const GetProductList = async (shopId: string) =>
    SendGetRequest(`${url}/ice-cream-shops/${shopId}/products`);

export const GetShopDetails = async (shopId: string) =>
    SendGetRequest(`${url}/ice-cream-shops/${shopId}`);

export const GetShops = async (currentPage: number) =>
    SendGetRequest(`${url}/ice-cream-shops?per_page=${5}&current_page=${currentPage}`);

export const LikeShop = async (shopId: string) =>
    SendPostWithoutPayloadRequest(`${url}/ice-cream-shops/${shopId}/like`);

export const DislikeShop = async (shopId: string) =>
    SendPostWithoutPayloadRequest(`${url}/ice-cream-shops/${shopId}/dislike`);

export const GetRatings = async (currentPage: number, shopId: string) =>
    SendGetRequest(
        `${url}/ice-cream-shops/${shopId}/ratings?per_page=${5}&current_page=${currentPage}`,
    );
