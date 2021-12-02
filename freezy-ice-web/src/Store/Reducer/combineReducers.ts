import { Reducer, combineReducers } from 'redux';
import IState from '../Interface/IState';
import reducerCommon from './Common/reducer';
import reducerDictionary from './Dictionaries/reducer';
import reducerProduct from './Shop/reducer';

const reducers: Reducer<IState> = combineReducers<IState>({
    common: reducerCommon,
    shopState: reducerProduct,
    dictionaryState: reducerDictionary,
});

export default reducers;
