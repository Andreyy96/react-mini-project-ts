import {FC} from 'react';
import {IMovie} from "../../../interfaces";

import {StarsRating} from "../StarsRating/StarsRating";
import {PosterPreview} from "../PosterPreview";
import {useNavigate} from "react-router-dom";


interface IProps {
    movie: IMovie
}
const MoviesListCard:FC<IProps> = ({movie}) => {

    const {id,poster_path,original_title, vote_average} = movie
    const navigate = useNavigate()

    const goMovieDetails: () => void = () => {
        navigate(`${id}`)
    }

    return (
        <div onClick={goMovieDetails}>
            <PosterPreview poster_url={poster_path}/>
            <h3>{original_title}</h3>
            <StarsRating rating={vote_average}/>
        </div>
    );
};

export {MoviesListCard};