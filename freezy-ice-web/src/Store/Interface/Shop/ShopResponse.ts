import { LatLngExpression } from 'leaflet';

export interface ShopResponse {
    id: number;
    name: string;
    description: string;
    updatedAt: string;
    address: string;
    openAt: string;
    closedAt: string;
    grade: number;
    picture: string;
    cords: LatLngExpression;
    isFavorite: boolean;
}
