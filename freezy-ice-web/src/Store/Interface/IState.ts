import AdminState from './AdminShop';
import { CommonState } from './CommonInterface';
import { DictionaryState } from './Dictionaries';
import { ProfileState } from './Profile';
import { ShopState } from './Shop';

interface IState {
    common: CommonState;
    shopState: ShopState;
    dictionaryState: DictionaryState;
    profileState: ProfileState;
    adminState: AdminState;
}

export default IState;
