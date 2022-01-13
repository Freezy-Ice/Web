import LoginInterface from '../../Interface/Auth/AuthInterface';
import { SendGetRequest, SendLoginRequest } from '../AppService';

const url = `${process.env.REACT_APP_API_URL}`;

export const PostLogin = async (loginModel: LoginInterface) =>
    SendLoginRequest(`${url}/auth/login`, loginModel);

export const FetchUserInfo = async () => SendGetRequest(`${url}/me`);
