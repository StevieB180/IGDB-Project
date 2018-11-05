export interface IUser {
    userID: string;
    email: string;
    firstName: string;
    lastName: string;
    dob: Date;
    reviews: IReview[];
}

export interface IReview {
    reviewID: string;
    gameID: number;
    rating: number;
    description: string;
}