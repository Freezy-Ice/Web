export default class OpeningHoursModels {
    day: string;

    from: Date | null;

    to: Date | null;

    open: boolean;

    constructor(day: string, from: Date | null, to: Date | null, open: boolean) {
        this.day = day;
        this.from = from;
        this.to = to;
        this.open = open;
    }
}
