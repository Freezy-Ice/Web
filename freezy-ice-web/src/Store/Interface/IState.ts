import { CommonState } from './CommonInterface';
import { DictionaryState } from './Dictionaries';
import { AuthState } from './Auth/AuthInterface';
import { ShopState } from './Shop';

interface IState {
    common: CommonState;
    shopState: ShopState;
    dictionaryState: DictionaryState;
    authState: AuthState;
}

export default IState;
