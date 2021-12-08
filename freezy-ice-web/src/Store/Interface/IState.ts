import { CommonState } from './CommonInterface';
import { DictionaryState } from './Dictionaries';
import { AuthState } from './Auth/AuthInterface';
import { ShopState } from './Shop';
import { BusinessShopState } from './BusinessShop';

interface IState {
    common: CommonState;
    shopState: ShopState;
    dictionaryState: DictionaryState;
    authState: AuthState;
    businessShopState: BusinessShopState;
}

export default IState;
