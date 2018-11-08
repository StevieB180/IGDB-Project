export interface IGame {
    gameID: string;
    title: string;
    developer: string;
    publisher: string;
    releaseDate: Date;
    ageRating: IAgeRating[];
    boxArtUrl?: string;
    genres: string[];
    platforms: string[];
    avgRating: number;
    description: string;
}

export interface IAgeRating {
    type: string;
    rating: string;
}