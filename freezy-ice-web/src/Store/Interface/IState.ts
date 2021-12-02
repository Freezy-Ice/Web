import { CommonState } from './CommonInterface';
import { DictionaryState } from './Dictionaries';
import { ShopState } from './Shop';

interface IState {
    common: CommonState;
    shopState: ShopState;
    dictionaryState: DictionaryState;
}

export default IState;
