import { PaginationInterface } from '../Shop/PaginationInterface';

interface RatingInterface {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    city: string;
    address: string;
    rating: number;
    favourite: boolean;
    myRating: RateInterface;
    updatedAt: string;
}

export interface RatingState {
    data: Array<RatingInterface>;
    paginationData: PaginationInterface;
}

export interface RateInterface {
    id: number;
    rating: number;
    comment: string;
    createdAt: string;
}

export default RatingInterface;
