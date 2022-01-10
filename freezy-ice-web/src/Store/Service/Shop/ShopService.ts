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
    SendGetRequest(`${url}/ice-cream-shops/${shopId}/products`);

export const GetShopDetails = async (shopId: string) =>
    SendGetRequest(`${url}/ice-cream-shops/${shopId}`);

export const GetShops = async (currentPage: number) =>
    SendGetRequest(`${url}/shops?per_page=${5}&current_page=${currentPage}`);

export const LikeShop = async (shopId: string) =>
    SendPostWithoutPayloadRequest(`${url}/ice-cream-shops/${shopId}/like`);

export const DislikeShop = async (shopId: string) =>
    SendPostWithoutPayloadRequest(`${url}/ice-cream-shops/${shopId}/dislike`);

export const GetRatings = async (currentPage: number, shopId: string) =>
    SendGetRequest(
        `${url}/ice-cream-shops/${shopId}/ratings?per_page=${5}&current_page=${currentPage}`,
    );

export const PostRating = async (shopId: number, ratingModel: CreateRatingModel) =>
    SendPostRequest(`${url}/ice-cream-shops/${shopId}/rate`, ratingModel);

export const RemoveRatings = async (shopId: string, ratingId: string) =>
    SendDeleteRequest(`${url}/ice-cream-shops/${shopId}/${ratingId}`);
