import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {movieService} from "../../../services";
import {MoviesListCard} from "../MoviesListCard";
import {IData, IPaginationData} from "../../../interfaces";
import {useAppContext, UsePaganationPage} from "../../../hooks";
import css from "./MoviesList.module.css"


interface IProps {

}
const MoviesList:FC<IProps> = () => {

    const [moviesRes, setMoviesRes] = useState<IData>({page: null, results: []})
    const {page, prev, next}: IPaginationData = UsePaganationPage()
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")
    const word = searchParams.get("query")



    useEffect(() => {
        if (id) {
            movieService.getByGenre(id, page).then(({data}) => setMoviesRes(data))
        }
        else if (word){
            movieService.getSearchAll(word, page).then(({data}) => setMoviesRes(data))
        }
        else {
            movieService.getAll(page).then(({data}) => setMoviesRes(data))
        }
    }, [page, id, word]);

    return (
        <div className={css.main_div}>
            <div className={css.movies_list}>
                {moviesRes.results.map(movie => <MoviesListCard movie={movie} key={movie.id} />)}
            </div>
            <div className={css.button_container}>
                <button disabled={page==='1'} onClick={prev}>prev</button>
                <button  onClick={next}>next</button>
            </div>
        </div>
    );
};

export {MoviesList};