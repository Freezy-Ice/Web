import { SendDeleteRequest, SendGetRequest } from '../AppService';

const url = `${process.env.REACT_APP_API_URL}`;

export const GetUserInfo = async () => SendGetRequest(`${url}/auth/user`);

export const GetFavouriteShops = async (currentPage: number) =>
    SendGetRequest(`${url}/favourite?perPage=${5}&currentPage=${currentPage}`);

export const GetUserRatings = async (currentPage: number) =>
    SendGetRequest(`${url}/ratings?perPage=${5}&currentPage=${currentPage}`);

export const DeleteUserRating = async (shopId: number) =>
    SendDeleteRequest(`${url}/ice-cream-shops/${shopId}/rate`);
