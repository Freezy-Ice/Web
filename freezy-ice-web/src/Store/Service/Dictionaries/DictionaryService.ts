import CategoryInterface from '../../Interface/Dictionaries/CategoryInterface';
import FlavorInterface from '../../Interface/Dictionaries/FlavorInterface';
import {
    SendDeleteRequest,
    SendGetRequest,
    SendPostRequest,
    SendPostWithoutPayloadRequest,
    SendPutRequest,
} from '../AppService';

const url = `${process.env.REACT_APP_API_URL}`;

export const GetCities = async () => SendGetRequest(`${url}/cities`);

export const GetFlavors = async () => SendGetRequest(`${url}/flavors`);
export const AddFlavor = async (payload: string) =>
    SendPostRequest(`${url}/admin/flavors`, payload);
export const DeleteFlavor = async (flavorsId: string) =>
    SendDeleteRequest(`${url}/admin/flavors/${flavorsId}`);
export const EditFlavor = async (flavorsId: string, payload: string) =>
    SendPutRequest(`${url}/admin/flavors/${flavorsId}`, payload);

export const GetCategories = async () => SendGetRequest(`${url}/categories`);
export const AddCategory = async (payload: string) =>
    SendPostRequest(`${url}/admin/categories`, payload);
export const DeleteCategory = async (categoriesId: string) =>
    SendDeleteRequest(`${url}/admin/categories/${categoriesId}`);
export const EditCategory = async (categoriesId: string, payload: string) =>
    SendPutRequest(`${url}/admin/categories/${categoriesId}`, payload);
