import React, {FC} from 'react';
import {Stack} from "@mui/material";

import {IMovie} from "../../../interfaces";
import css from "./MovieInfo.module.css"
import {PosterPreview} from "../PosterPreview";
import {GenreBadge} from "../GenreBadge";
import {ProductionCompanies} from "../ProductionCompanies";
import {StarsRating} from "../StarsRating";
import {ProductionCountry} from "../ProductionCountry";
import {useNavigate} from "react-router-dom";




interface IProps {
    movieDetails: IMovie
}
const MovieInfo:FC<IProps> = ({movieDetails}) => {

    const {title,original_title, poster_path, vote_average, overview,
        release_date, genres, original_language, production_companies, production_countries, runtime} = movieDetails

    const navigate = useNavigate()

    return (
        <div className={css.main}>
            <button onClick={() => navigate(-1)}>Back</button>
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
                <Stack className={css.companies_container} direction={"row"}>
                    <p>Companies:</p> {production_companies.map(company => <ProductionCompanies company={company} key={company.id}/>)}
                </Stack>
                <Stack className={css.countries_container} direction={"row"}>
                    <p>Countries:</p> {production_countries.map((country, index) => <ProductionCountry country={country} key={index}/>)}
                </Stack>
                <p>Language: {original_language}</p>
                <p>Runtime: {runtime}min</p>
                <p>Rating: {vote_average}</p> <StarsRating rating={vote_average}/>
            </div>
            <div className={css.overview}>
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>


        </div>
    );
};

export {MovieInfo};