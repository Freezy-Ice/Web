import { Reducer, combineReducers } from 'redux';
import IState from '../Interface/IState';
import reducerAuth from './Auth/reducer';
import reducerCommon from './Common/reducer';
import reducerDictionary from './Dictionaries/reducer';
import reducerProduct from './Shop/reducer';
import reducerBuisnessShop from './BusinessShop/reducer';

const reducers: Reducer<IState> = combineReducers<IState>({
    common: reducerCommon,
    shopState: reducerProduct,
    dictionaryState: reducerDictionary,
    authState: reducerAuth,
    businessShopState: reducerBuisnessShop,
});

export default reducers;
