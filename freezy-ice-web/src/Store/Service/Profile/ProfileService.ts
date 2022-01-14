import { SendDeleteRequest, SendGetRequest } from '../AppService';

const url = `${process.env.REACT_APP_API_URL}`;

export const GetUserInfo = async () => SendGetRequest(`${url}/me`);

export const GetFavouriteShops = async (currentPage: number) =>
    SendGetRequest(`${url}/me/favorites?perPage=${5}&currentPage=${currentPage}`);

export const GetUserRatings = async (currentPage: number) =>
    SendGetRequest(`${url}/me/reviews?perPage=${5}&currentPage=1`);

export const DeleteUserRating = async (shopId: number) =>
    SendDeleteRequest(`${url}/shops/${shopId}/review`);
