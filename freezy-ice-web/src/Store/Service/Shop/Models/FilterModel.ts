export class FilterModel {
    search: string;

    city: number | undefined;

    category: number | null;

    flavor: number | null;

    priceMin: number | null;

    priceMax: number | null;

    constructor(
        search: string,
        city: number | undefined,
        category: number | null,
        flavor: number | null,
        priceMin: number | null,
        priceMax: number | null,
    ) {
        this.search = search;
        this.city = city;
        this.category = category;
        this.flavor = flavor;
        this.priceMin = priceMin;
        this.priceMax = priceMax;
    }
}
