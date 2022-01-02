import FlavorInterface from '../../Dictionaries/FlavorInterface';

export interface ProductInterface {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    category: CategoryInterface;
    flavors: Array<FlavorInterface>;
    price: number;
    kcal: number;
}

export interface CategoryInterface {
    id: number;
    name: string;
}

export interface ProductState {
    data: Array<ProductInterface> | null;
}
