import { CommonState } from './CommonInterface';
import { DictionaryState } from './Dictionaries';
import { ProfileState } from './Profile';
import { ShopState } from './Shop';

interface IState {
    common: CommonState;
    shopState: ShopState;
    dictionaryState: DictionaryState;
    profileState: ProfileState;
}

export default IState;
