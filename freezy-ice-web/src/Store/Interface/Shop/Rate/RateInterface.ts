import { PaginationInterface } from '../PaginationInterface';

export interface RateInterface {
    id: number;
    username: string;
    rating: number;
    comment: string;
    createdAt: string;
}

export interface RatingState {
    data: Array<RateInterface> | null;
    paginationData: PaginationInterface;
}
