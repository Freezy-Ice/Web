import {
    SendDeleteRequest,
    SendGetRequest,
    SendPostRequest,
    SendPostWithoutPayloadRequest,
} from '../AppService';
import { CreateRatingModel } from './Models/CreateRatingModel';

const perPage = `${process.env.PER_PAGE}`;
const url = `${process.env.REACT_APP_API_URL}`;
console.log(url);

export const GetProductList = async (shopId: string) =>
    SendGetRequest(`${url}/shops/${shopId}/products`);

export const GetShopDetails = async (shopId: string) => SendGetRequest(`${url}/shops/${shopId}`);

export const GetShops = async (currentPage: number) =>
    SendGetRequest(`${url}/shops?per_page=${5}&currentPage=${currentPage}`);

export const LikeShop = async (shopId: string) =>
    SendPostWithoutPayloadRequest(`${url}/shops/${shopId}/like`);

export const DislikeShop = async (shopId: string) =>
    SendPostWithoutPayloadRequest(`${url}/shops/${shopId}/like`);

export const GetRatings = async (currentPage: number, shopId: string) =>
    SendGetRequest(`${url}/shops/${shopId}/ratings?perPage=${5}&currentPage=${currentPage}`);

export const PostRating = async (shopId: number, ratingModel: CreateRatingModel) =>
    SendPostRequest(`${url}/shops/${shopId}/review`, ratingModel);

export const RemoveRatings = async (ratingId: string) =>
    SendDeleteRequest(`${url}/admin/reviews/1${ratingId}`);
