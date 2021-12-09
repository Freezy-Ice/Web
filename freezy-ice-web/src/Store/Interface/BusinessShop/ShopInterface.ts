import { PaginationInterface } from '../Shop/PaginationInterface';

export interface BusinessShopDetailsInterface {
    id: number;
    name: string;
    city: string;
    address: string;
    description: string;
    imageUrl: string;
    rating: number;
    coords: { lat: number; lng: number };
    openingHours: Array<OpeningHoursInterface>;
    updatedAt: string;
}

export interface ShopDetails {
    data: BusinessShopDetailsInterface;
}

export interface ShopsIndex {
    data: Array<BusinessShopDetailsInterface>;
    paginationData: PaginationInterface;
}

export interface OpeningHoursInterface {
    day: string;
    from: string;
    to: string;
    open: boolean;
}
