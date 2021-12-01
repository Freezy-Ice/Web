import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import { GetCategories, GetCities, GetFlavors } from '../../Service/Dictionaries/DictionaryService';

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
