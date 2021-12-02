import { SendGetRequest } from '../AppService';

const url = `${process.env.REACT_APP_API_URL}`;

export const GetUserInfo = async () => SendGetRequest(`${url}/auth/user`);

export const GetFavouriteShops = async (currentPage: number) =>
    SendGetRequest(`${url}/favourite?per_page=${5}&current_page=${currentPage}`);
