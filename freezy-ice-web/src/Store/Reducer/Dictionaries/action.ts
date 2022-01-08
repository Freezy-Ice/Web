import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import CategoryInterface from '../../Interface/Dictionaries/CategoryInterface';
import {
    AddCategory,
    AddFlavor,
    DeleteCategory,
    DeleteFlavor,
    EditCategory,
    EditFlavor,
    GetCategories,
    GetCities,
    GetFlavors,
} from '../../Service/Dictionaries/DictionaryService';

export async function FetchCitiesList(dispatch: any) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await GetCities();
    dispatch({
        payload: result,
        type: ActionsEnums.GET_CITIES,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}

export async function FetchFlavorsList(dispatch: any) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await GetFlavors();
    dispatch({
        payload: result,
        type: ActionsEnums.GET_FLAVORS,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}

export async function UpdateFlavor(dispatch: any, flavorId: string, payload: string) {
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await EditFlavor(flavorId, payload);
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await GetFlavors();
}

export async function CrateFlavor(dispatch: any, payload: string) {
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await AddFlavor(payload);
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await GetFlavors();
}

export async function RemoveFlavor(dispatch: any, flavorId: string) {
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    await DeleteFlavor(flavorId);
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    await GetFlavors();
}

export async function FetchCategoriesList(dispatch: any) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await GetCategories();
    dispatch({
        payload: result,
        type: ActionsEnums.GET_CATEGORIES,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}

export async function CrateCategory(dispatch: any, payload: string) {
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await AddCategory(payload);
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await GetCategories();
}

export async function UpdateCategory(dispatch: any, categoryId: string, payload: string) {
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await EditCategory(categoryId, payload);
    dispatch({
        type: ActionsEnums.SAVING,
    });
    await GetCategories();
}

export async function RemoveCategory(dispatch: any, categoryId: string) {
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    await DeleteCategory(categoryId);
    dispatch({
        type: ActionsEnums.PROCESSING,
    });
    await GetCategories();
}
