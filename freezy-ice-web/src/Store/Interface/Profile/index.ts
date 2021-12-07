import { ShopsIndex } from '../Shop/ShopInterface';
import { RatingState } from './RatingInterface';
import { UserProfileState } from './UserProfileInterface';

export interface ProfileState {
    userProfileState: UserProfileState | null;
    favouriteShopsState: ShopsIndex | null;
    ratingState: RatingState | null;
}
