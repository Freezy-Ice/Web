export class CreateRatingModel {
    rating!: number;

    comment!: string | null;

    constructor(rating: number, comment: string) {
        this.rating = rating;
        this.comment = comment;
    }
}
