import CategoryInterface from '../../Interface/Dictionaries/CategoryInterface';
import FlavorInterface from '../../Interface/Dictionaries/FlavorInterface';
import {
    SendDeleteRequest,
    SendGetRequest,
    SendPostRequest,
    SendPostWithoutPayloadRequest,
    SendPutRequest,
} from '../AppService';
import FlavorPutModel from '../Product/Model/FlavorPutModel';
import CategoryModal from './Models/CategoryModel';

const url = `${process.env.REACT_APP_API_URL}`;

export const GetCities = async () => SendGetRequest(`${url}/cities`);

export const GetFlavors = async () => SendGetRequest(`${url}/flavors`);

export const AddFlavor = async (payload: FlavorPutModel) =>
    SendPostRequest(`${url}/admin/flavors`, payload);

export const DeleteFlavor = async (flavorsId: string) =>
    SendDeleteRequest(`${url}/admin/flavors/${flavorsId}`);

export const EditFlavor = async (flavorsId: string, payload: FlavorPutModel) =>
    SendPutRequest(`${url}/admin/flavors/${flavorsId}`, payload);

export const GetCategories = async () => SendGetRequest(`${url}/categories`);

export const AddCategory = async (payload: CategoryModal) =>
    SendPostRequest(`${url}/admin/categories`, payload);

export const DeleteCategory = async (categoriesId: string) =>
    SendDeleteRequest(`${url}/admin/categories/${categoriesId}`);

export const EditCategory = async (categoriesId: string, payload: CategoryModal) =>
    SendPutRequest(`${url}/admin/categories/${categoriesId}`, payload);
