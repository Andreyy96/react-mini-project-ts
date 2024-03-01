import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {MovieInfo} from "../MovieInfo";


const MovieInfoContainer = () => {

    const {id} = useParams<string>()

    const [movieDetails, setMovieDetails] = useState<IMovie>()

    useEffect(  ()  => {
        movieService.getById(+id).then(({data}) => setMovieDetails(data))
    }, [id]);


    return (
        <div>
            {movieDetails && <MovieInfo movieDetails={movieDetails}/>}
        </div>
    );
};

export {MovieInfoContainer}