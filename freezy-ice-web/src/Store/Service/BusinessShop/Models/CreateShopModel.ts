export default class CreateShopModel {
    name: string;

    city: number;

    address: string;

    description: string;

    constructor(name: string, city: number, address: string, description: string) {
        this.name = name;
        this.city = city;
        this.address = address;
        this.description = description;
    }
}
