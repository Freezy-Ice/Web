import { ShopsIndex } from '../Shop/ShopInterface';
import { UserProfileState } from './UserProfileInterface';

export interface ProfileState {
    userProfileState: UserProfileState | null;
    favouriteShopsState: ShopsIndex | null;
}
