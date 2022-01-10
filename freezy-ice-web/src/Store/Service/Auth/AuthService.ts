import LoginInterface from '../../Interface/Auth/AuthInterface';
import { SendGetRequest, SendPostRequest } from '../AppService';

const url = `${process.env.REACT_APP_API_URL}`;

export const PostLogin = async (loginModel: LoginInterface) =>
    SendPostRequest(`${url}/auth/login`, loginModel);

export const FetchUserInfo = async () => SendGetRequest(`${url}/me`);
