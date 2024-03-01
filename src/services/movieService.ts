import {apiService} from "./apiService";
import {urls} from "../constants";
import {IData, IMovie} from "../interfaces";
import {IRes} from "../types";



const movieService = {
    getAll: (page = "1"): IRes<IData> => apiService.get(urls.movie.link, {params:{page}}),
    getSearchAll: (query:string, page = "1"): IRes<IData> => apiService.get(urls.movie.search_link, {params: {query, page}}),
    getById: (id:number): IRes<IMovie> => apiService.get(urls.movie.byId(id)),
    getByGenre: (with_genres: string, page = "1"): IRes<IData> => apiService.get(urls.movie.link, {params: {with_genres, page}}),
}

export {movieService}