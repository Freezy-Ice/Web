import ActionsEnums from '../../../Helpers/enums/ActionsEnum';
import LoginInterface from '../../Interface/Auth/AuthInterface';
import { PostLogin } from '../../Service/Auth/AuthService';

export async function FetchLogin(dispatch: any, loginModel: LoginInterface) {
    dispatch({
        type: ActionsEnums.LOADING,
    });
    const result = await PostLogin(loginModel);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_TOKEN,
    });
    dispatch({
        type: ActionsEnums.LOADING,
    });
}
