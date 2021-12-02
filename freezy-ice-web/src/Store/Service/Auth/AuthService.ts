import LoginInterface from '../../Interface/Auth/AuthInterface';
import { SendPostRequest } from '../AppService';

const url = `${process.env.REACT_APP_API_URL}`;

export const PostLogin = async (loginModel: LoginInterface) =>
    SendPostRequest(`${url}/auth/login`, loginModel);
