import AdminState from './AdminShop';
import { CommonState } from './CommonInterface';
import { DictionaryState } from './Dictionaries';
import { ProfileState } from './Profile';
import { AuthState } from './Auth/AuthInterface';
import { ShopState } from './Shop';
import { BusinessShopState } from './BusinessShop';

interface IState {
    common: CommonState;
    shopState: ShopState;
    dictionaryState: DictionaryState;
    profileState: ProfileState;
    adminState: AdminState;
    authState: AuthState;
    businessShopState: BusinessShopState;
}

export default IState;
