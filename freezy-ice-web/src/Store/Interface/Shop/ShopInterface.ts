export interface ShopDetailsInterface {
    id: number;
    name: string;
    city: string;
    address: string;
    description: string;
    imageUrl: string;
    rating: number;
    favourite: boolean;
    coords: { lat: number; lng: number };
    openingHours: Array<OpeningHoursInterface>;
    updatedAt: string;
}

export interface ShopDetails {
    data: ShopDetailsInterface;
}

export interface ShopsInterface {
    id: number;
    name: string;
    city: string;
    address: string;
    description: string;
    imageUrl: string;
    rating: number;
    favourite: boolean;
    coords: { lat: number; lng: number };
    openingHours: OpeningHoursInterface;
    updatedAt: string;
    accepted: boolean;
}

export interface ShopsIndex {
    data: Array<ShopsInterface>;
    paginationData: {
        total: number;
        perPage: number;
        currentPage: number;
    };
}

export interface OpeningHoursInterface {
    day: string;
    from: string;
    to: string;
    open: boolean;
}
