export interface UserInterface {
    id: number;
    name: string;
    email: string;
    companyAccount: boolean;
}

export interface UserState {
    data: UserInterface;
}
