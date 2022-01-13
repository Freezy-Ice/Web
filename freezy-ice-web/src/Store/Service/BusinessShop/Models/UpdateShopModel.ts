import OpeningHoursModels from './OpeningHoursModel';

export default class UpdateShopModel {
    name: string;

    image: string;

    city: string;

    address: string;

    description: string;

    coords: { lat: number; lng: number };

    openingHours: Array<OpeningHoursModels>;

    constructor(
        name: string,
        image: string,
        city: string,
        address: string,
        description: string,
        coords: { lat: number; lng: number },
        openingHours: Array<OpeningHoursModels>,
    ) {
        this.name = name;
        this.image = image;
        this.city = city;
        this.address = address;
        this.description = description;
        this.coords = coords;
        this.openingHours = openingHours;
    }
}
