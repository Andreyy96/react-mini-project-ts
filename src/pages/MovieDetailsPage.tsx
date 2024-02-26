import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {IMovie} from "../interfaces";
import {movieService} from "../services";
import {MovieInfo} from "../components/MoviesContainer/MovieInfo";


const MovieDetailsPage = () => {

    const {id} = useParams<string>()

    const [movieDetails, setMovieDetails] = useState<IMovie>()

    useEffect(() => {
        movieService.getById(+id).then(({data}) => setMovieDetails(data))
    }, [id]);

    return (
        <div>
            <MovieInfo movieDetails={movieDetails}/>
        </div>
    );
};

export {MovieDetailsPage};