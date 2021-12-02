interface FlavorInterface {
    id: number;
    name: string;
}

export interface FlavorsState {
    data: Array<FlavorInterface>;
}

export default FlavorInterface;
