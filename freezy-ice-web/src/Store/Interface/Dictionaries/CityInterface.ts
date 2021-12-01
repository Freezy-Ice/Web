interface CityInterface {
    id: number;
    name: string;
}

export interface CitiesState {
    data: Array<CityInterface>;
}

export default CityInterface;
