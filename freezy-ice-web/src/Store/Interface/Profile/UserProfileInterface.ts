interface UserProfileInterface {
    id: number;
    name: string;
    email: string;
    companyAccount: boolean;
    isAdmin: boolean;
}

export interface UserProfileState {
    data: UserProfileInterface;
}

export default UserProfileInterface;
