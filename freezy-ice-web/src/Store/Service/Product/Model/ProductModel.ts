import FlavorModel from './FlavorModel';

export default class ProductModel {
    name: string;

    image: string;

    description: string;

    category: number;

    flavors: Array<FlavorModel>;

    price: number;

    kcal: number;

    constructor(
        name: string,
        image: string,
        description: string,
        category: number,
        flavors: Array<FlavorModel>,
        price: number,
        kcal: number,
    ) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.category = category;
        this.flavors = flavors;
        this.price = price;
        this.kcal = kcal;
    }
}
