export interface IReviewGame {
    gameID: number;
    reviews: IReview[];
}

export interface IReview {
    rating: string;
    description: string;
    userName: string;
}