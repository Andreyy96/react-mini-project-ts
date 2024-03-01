import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IResGenres} from "../interfaces";


const genreService = {
    getAll: (): IRes<IResGenres> => apiService.get(urls.genre.link)
}

export {genreService}