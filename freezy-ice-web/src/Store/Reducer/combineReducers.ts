import { Reducer, combineReducers } from 'redux';
import IState from '../Interface/IState';
import reducerAuth from './Auth/reducer';
import reducerCommon from './Common/reducer';
import reducerDictionary from './Dictionaries/reducer';
import reducerProfile from './Profile/reducer';
import reducerProduct from './Shop/reducer';
import reducerBuisnessShop from './BusinessShop/reducer';
import reducerAdmin from './ShopAdmin/reducer';

const reducers: Reducer<IState> = combineReducers<IState>({
    common: reducerCommon,
    shopState: reducerProduct,
    dictionaryState: reducerDictionary,
    profileState: reducerProfile,
    adminState: reducerAdmin,
    authState: reducerAuth,
    businessShopState: reducerBuisnessShop,
});

export default reducers;
