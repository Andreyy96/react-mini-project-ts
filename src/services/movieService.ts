import {apiService} from "./apiService";
import {urls} from "../constants";
import {IMovie} from "../interfaces";
import {IRes} from "../types";
import {IData} from "../interfaces/dataInterface";


const movieService = {
    getAll: (page = "1"): IRes<IData> => apiService.get(urls.movie.link, {params:{page}}),
    getSearchAll: (query:string, page:string): IRes<IData> => apiService.get(urls.movie.search_link, {params: {query, page}}),
    getById: (id:number): IRes<IMovie> => apiService.get(urls.movie.byId(id)),
    getByGenre: (with_genres: string, page:string): IRes<IData> => apiService.get(urls.movie.link, {params: {with_genres, page}}),
}

export {movieService}