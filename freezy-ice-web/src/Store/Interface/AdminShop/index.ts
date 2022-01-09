import { FlavorsState } from '../Dictionaries/FlavorInterface';
import AdminShopInterface, { AdminShopsState } from './AdminShopInterface';

export interface AdminState {
    adminShop: AdminShopInterface | null;
    adminShops: AdminShopsState | null;
}
export default AdminState;
