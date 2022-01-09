import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import LoginInterface from '../../Interface/Auth/AuthInterface';
import { FetchUserInfo, PostLogin } from '../../Service/Auth/AuthService';

export async function FetchLogin(dispatch: any, loginModel: LoginInterface) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result: any = await PostLogin(loginModel);
    localStorage.setItem('token', result?.data.token);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_TOKEN,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}

export async function FetchUserInfos(dispatch: any) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await FetchUserInfo();
    dispatch({
        payload: result,
        type: ActionsEnums.GET_USER_INFOS,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}
