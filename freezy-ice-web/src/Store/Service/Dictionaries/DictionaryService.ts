import { SendGetRequest } from '../AppService';

const url = `${process.env.REACT_APP_API_URL}`;

export const GetCities = async () => SendGetRequest(`${url}/cities`);

export const GetFlavors = async () => SendGetRequest(`${url}/flavors`);

export const GetCategories = async () => SendGetRequest(`${url}/categories`);
