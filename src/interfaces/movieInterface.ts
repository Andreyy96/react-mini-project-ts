import {IGenre} from "./genreInterface";

export interface IMovie {
    adult: boolean;
    genres: IGenre[]
    poster_path: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string
    title: string
    release_date: string
    vote_average: number
    production_companies: [{id: number, name: string}]
}