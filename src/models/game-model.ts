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
    category?: number;
    collection?: number;
    cover?: ICover;
    created_at?: number;
    esrb?: IESRB;
    genres?: number[];
    id?: number;
    name?: string;
    summary?: string;
    themes?: number[];
    url?: string;
    developers?: number;
    publishers?: number[];
    release_dates?: string;
    rating?: string; 
}

export interface ICover {
    url: string;
    height?: number;
    width?: number;
}

export interface IESRB {
    rating?: EESRB;
}

export interface IPEGI {
    rating?: number;
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

export interface ICompany {
    id: number;
    name: string;
    slug: string;
    url: string;
    logo?: ICover;
}