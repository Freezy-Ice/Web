import { UserState } from './UserInterface';

interface LoginInterface {
    email: string;
    password: string;
}

export interface TokenInterface {
    data: string;
}

export interface AuthState {
    tokenState: TokenInterface | null;
    userState: UserState | null;
}

export default LoginInterface;
