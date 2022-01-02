import IAction from '../../Interface/IAction';
import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import { AuthState, TokenInterface } from '../../Interface/Auth/AuthInterface';
import authInitialState from '../../InitialState/Auth/AuthInitialState';
import { UserState } from '../../Interface/Auth/UserInterface';

export type AuthType =
    | IAction<ActionsEnums.GET_TOKEN, TokenInterface>
    | IAction<ActionsEnums.GET_USER_INFOS, UserState>;
export default function reducerAuth(
    state: AuthState = authInitialState,
    action: AuthType,
): AuthState {
    switch (action.type) {
        case ActionsEnums.GET_TOKEN:
            return { ...state, tokenState: action.payload };
        case ActionsEnums.GET_USER_INFOS:
            return { ...state, userState: action.payload };
        default:
            return state;
    }
}
