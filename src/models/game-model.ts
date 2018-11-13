// export interface IGame {
//     gameID: string;
//     title: string;
//     developer: string;
//     publisher: string;
//     releaseDate: Date;
//     ageRating: IAgeRating[];
//     boxArtUrl?: string;
//     genres: string[];
//     platforms: string[];
//     avgRating: number;
//     description: string;
// }

export interface IGame {
    category: number;
    collection: number;
    cover: ICover;
    created_at: number;
    esrb: IESRB;
    genres: number[];
    id: number;
    name: string;
    summary: string;
    themes: number[];
    url: string;
}

export interface ICover {
    height: number;
    url: string;
    width: number;
}

export interface IESRB {
    rating: EESRB;
}

export interface IPEGI {
    rating: number;
}

export enum EPEGI {
    "3+",
    "7+",
    "12+",
    "16+"
}

export enum EESRB {
    "RP",
    "EC",
    "E",
    "E10+",
    "T",
    "M",
    "AO"
}