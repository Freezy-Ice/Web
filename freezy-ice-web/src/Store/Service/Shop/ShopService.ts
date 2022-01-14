import {
    SendDeleteRequest,
    SendGetRequest,
    SendPostRequest,
    SendPostWithoutPayloadRequest,
} from '../AppService';
import { CreateRatingModel } from './Models/CreateRatingModel';
import { FilterModel } from './Models/FilterModel';

const perPage = `${process.env.PER_PAGE}`;
const url = `${process.env.REACT_APP_API_URL}`;

export const GetProductList = async (shopId: string) =>
    SendGetRequest(`${url}/shops/${shopId}/products`);

export const GetShopDetails = async (shopId: string) => SendGetRequest(`${url}/shops/${shopId}`);

export const GetShops = async (currentPage: number) =>
    SendGetRequest(`${url}/shops?perPage=${5}&page=${currentPage}`);

export const GetFilteredShops = async (filterUrl: string) => SendGetRequest(`${url}${filterUrl}`);

export const LikeShop = async (shopId: string) =>
    SendPostWithoutPayloadRequest(`${url}/shops/${shopId}/like`);

export const DislikeShop = async (shopId: string) =>
    SendPostWithoutPayloadRequest(`${url}/shops/${shopId}/like`);

export const GetRatings = async (currentPage: number, shopId: string) =>
    SendGetRequest(`${url}/shops/${shopId}/reviews?perPage=${5}&page=${currentPage}`);

export const PostRating = async (shopId: number, ratingModel: CreateRatingModel) =>
    SendPostRequest(`${url}/shops/${shopId}/review`, ratingModel);

export const RemoveRatings = async (ratingId: string) =>
    SendDeleteRequest(`${url}/admin/reviews/${ratingId}`);
