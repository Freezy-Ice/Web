import { Reducer, combineReducers } from 'redux';
import IState from '../Interface/IState';
import reducerCommon from './Common/reducer';
import reducerDictionary from './Dictionaries/reducer';
import reducerProfile from './Profile/reducer';
import reducerProduct from './Shop/reducer';
import reducerAdmin from './ShopAdmin/reducer';

const reducers: Reducer<IState> = combineReducers<IState>({
    common: reducerCommon,
    shopState: reducerProduct,
    dictionaryState: reducerDictionary,
    profileState: reducerProfile,
    adminState: reducerAdmin,
});

export default reducers;
