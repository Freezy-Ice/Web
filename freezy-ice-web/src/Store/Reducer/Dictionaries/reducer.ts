import IAction from '../../Interface/IAction';
import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import { DictionaryState } from '../../Interface/Dictionaries';
import dictionaryInitialState from '../../InitialState/Dictionaries/DictionaryInitialState';
import { CategoriesState } from '../../Interface/Dictionaries/CategoryInterface';
import { CitiesState } from '../../Interface/Dictionaries/CityInterface';
import { FlavorsState } from '../../Interface/Dictionaries/FlavorInterface';

export type DictionaryType =
    | IAction<ActionsEnums.GET_CATEGORIES, CategoriesState>
    | IAction<ActionsEnums.GET_CITIES, CitiesState>
    | IAction<ActionsEnums.GET_FLAVORS, FlavorsState>;
export default function reducerDictionary(
    state: DictionaryState = dictionaryInitialState,
    action: DictionaryType,
): DictionaryState {
    switch (action.type) {
        case ActionsEnums.GET_CATEGORIES:
            return { ...state, categoriesListState: action.payload };
        case ActionsEnums.GET_CITIES:
            return { ...state, citiesListState: action.payload };
        case ActionsEnums.GET_FLAVORS:
            return { ...state, flavorsListState: action.payload };
        default:
            return state;
    }
}
