import React, {FC} from 'react';
import {Stack} from "@mui/material";

import {IMovie} from "../../../interfaces";
import css from "./MovieInfo.module.css"
import {PosterPreview} from "../PosterPreview";
import {StarsRating} from "../StarsRating";
import {GenreBadge} from "../GenreBadge";
import {ProductionCompanies} from "../ProductionCompanies";



interface IProps {
    movieDetails: IMovie
}
const MovieInfo:FC<IProps> = ({movieDetails}) => {

    const {title,original_title, poster_path, vote_average, overview,
        release_date, genres, original_language, production_companies} = movieDetails



    return (
        <div className={css.main}>
            <div className={css.title}>
                <h2>{title} ({original_title})</h2>
            </div>
            <div className={css.poster}>
                <PosterPreview poster_url={poster_path}/>
            </div>
            <div className={css.details}>
                <p>Release date: {release_date}</p>
                <div className={css.genres_container}>
                    <Stack spacing={9} direction={"row"}>
                        {genres.map( genre => <GenreBadge genre={genre} key={genre.id}/>)}
                    </Stack>
                </div>
                <Stack>
                    <div className={css.companies_container}>
                    <p>Companies:</p> {production_companies.map(company => <ProductionCompanies company={company} key={company.id}/>)}
                    </div>
                </Stack>
                <p>Language: {original_language}</p>
                <p className={css.rating_p}>Rating:</p> <StarsRating rating={vote_average}/>
            </div>
            <div className={css.overview}>
                <p>{overview}</p>
            </div>


        </div>
    );
};

export {MovieInfo};