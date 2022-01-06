import { PaginationInterface } from '../Shop/PaginationInterface';

export default interface AdminShopInterface {
    id: number;
    name: string;
    city: string;
    address: string;
    description: string;
    imageUrl: string;
}

export interface AdminShopsState {
    data: Array<AdminShopInterface>;
    paginationData: PaginationInterface;
}
