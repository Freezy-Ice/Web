import CityInterface from '../Dictionaries/CityInterface';
import { PaginationInterface } from '../Shop/PaginationInterface';

export interface BusinessShopDetailsInterface {
    id: number;
    name: string;
    city: CityInterface;
    address: string;
    description: string;
    imageUrl: string;
    rating: number;
    coords: CoordsInterface;
    openingHours: Array<OpeningHoursInterface>;
    updatedAt: string;
}

export interface CoordsInterface {
    lat: number;
    lng: number;
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
    from: Date | null;
    to: Date | null;
    open: boolean;
}

export interface ImageState {
    data: ImageInterface;
}

export interface ImageInterface {
    id: string;
    url: string;
}
