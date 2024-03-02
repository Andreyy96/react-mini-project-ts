import {IMovie} from "./movieInterface";

export interface IData {
    page: string
    results: IMovie[]
    total_pages: number
}