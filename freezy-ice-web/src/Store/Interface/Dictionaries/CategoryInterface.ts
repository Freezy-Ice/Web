interface CategoryInterface {
    id: number;
    name: string;
}

export interface CategoriesState {
    data: Array<CategoryInterface>;
}

export default CategoryInterface;
