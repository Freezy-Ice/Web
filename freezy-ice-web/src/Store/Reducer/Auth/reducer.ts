import IAction from '../../Interface/IAction';
import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import { AuthState, TokenInterface } from '../../Interface/Auth/AuthInterface';
import authInitialState from '../../InitialState/Auth/AuthInitialState';

export type AuthType = IAction<ActionsEnums.GET_TOKEN, TokenInterface>;
export default function reducerAuth(
    state: AuthState = authInitialState,
    action: AuthType,
): AuthState {
    switch (action.type) {
        case ActionsEnums.GET_TOKEN:
            return { ...state, tokenState: action.payload };
        default:
            return state;
    }
}
