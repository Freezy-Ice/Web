import { SendGetRequest, SendPostRequest, SendPostWithoutPayloadRequest } from '../AppService';

const perPage = `${process.env.PER_PAGE}`;
const url = `${process.env.REACT_APP_API_URL}`;

export const GetNotApprovedShops = async (currentPage: number) =>
    SendGetRequest(`${url}/admin/ice-cream-shops?per_page=5&current_page=${currentPage}`);

export const PostApprovedShop = async (shopId: string) =>
    SendPostWithoutPayloadRequest(`${url}/admin/ice-cream-shops/${shopId}`);
