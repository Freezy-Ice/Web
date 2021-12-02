import { Reducer, combineReducers } from 'redux';
import IState from '../Interface/IState';
import reducerAuth from './Auth/reducer';
import reducerCommon from './Common/reducer';
import reducerDictionary from './Dictionaries/reducer';
import reducerProduct from './Shop/reducer';

const reducers: Reducer<IState> = combineReducers<IState>({
    common: reducerCommon,
    shopState: reducerProduct,
    dictionaryState: reducerDictionary,
    authState: reducerAuth,
});

export default reducers;
