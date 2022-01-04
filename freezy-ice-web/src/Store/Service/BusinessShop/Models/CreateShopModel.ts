export default class CreateShopModel {
    name: string;

    image: File;

    city: string;

    address: string;

    description: string;

    constructor(name: string, image: File, city: string, address: string, description: string) {
        this.name = name;
        this.image = image;
        this.city = city;
        this.address = address;
        this.description = description;
    }
}
