interface CityInterface {
    id: number;
    name: string;
    slug: string;
}

export interface CitiesState {
    data: Array<CityInterface>;
}

export default CityInterface;
