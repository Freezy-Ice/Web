import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import profileInitialState from '../../InitialState/Profile/ProfileInitialState';
import IAction from '../../Interface/IAction';
import { ProfileState } from '../../Interface/Profile';
import { RatingState } from '../../Interface/Profile/RatingInterface';
import { UserProfileState } from '../../Interface/Profile/UserProfileInterface';
import { ShopsIndex } from '../../Interface/Shop/ShopInterface';

export type ProfileType =
    | IAction<ActionsEnums.GET_USER_PROFILE, UserProfileState>
    | IAction<ActionsEnums.GET_FAVOURITE_SHOPS, ShopsIndex>
    | IAction<ActionsEnums.GET_USER_RATINGS, RatingState>;
export default function reducerProfile(
    state: ProfileState = profileInitialState,
    action: ProfileType,
): ProfileState {
    switch (action.type) {
        case ActionsEnums.GET_USER_PROFILE:
            return { ...state, userProfileState: action.payload };
        case ActionsEnums.GET_FAVOURITE_SHOPS:
            return { ...state, favouriteShopsState: action.payload };
        case ActionsEnums.GET_USER_RATINGS:
            return { ...state, ratingState: action.payload };
        default:
            return state;
    }
}
