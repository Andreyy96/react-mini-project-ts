import {FC} from 'react';
import Badge from "@mui/material/Badge";

import {IMovie} from "../../../interfaces";
import {PosterPreview} from "../PosterPreview";
import {useNavigate} from "react-router-dom";
import {StarsRating} from "../StarsRating";
import css from "./MoviesListCard.module.css"

interface IProps {
    movie: IMovie
}
const MoviesListCard:FC<IProps> = ({movie}) => {

    const {id,poster_path,title, vote_average} = movie
    const navigate = useNavigate()

    const goMovieDetails: () => void = () => {
        navigate(`${id}`)
    }

    return (
        <div className={css.movies_list_card} onClick={goMovieDetails}>
            <Badge badgeContent={Math.round(vote_average)} color="primary">
                <PosterPreview poster_url={poster_path}/>
            </Badge>
            <StarsRating rating={vote_average}/>
            <h3>{title}</h3>
        </div>
    );
};

export {MoviesListCard};