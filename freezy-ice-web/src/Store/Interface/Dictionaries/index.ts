import { CategoriesState } from './CategoryInterface';
import { CitiesState } from './CityInterface';
import { FlavorsState } from './FlavorInterface';

export interface DictionaryState {
    flavorsListState: FlavorsState | null;
    citiesListState: CitiesState | null;
    categoriesListState: CategoriesState | null;
}
