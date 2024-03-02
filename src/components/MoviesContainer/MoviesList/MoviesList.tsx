import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {movieService} from "../../../services";
import {MoviesListCard} from "../MoviesListCard";
import {IData, IPaginationData} from "../../../interfaces";
import {useAppFlagContext, usePageQuery} from "../../../hooks";
import css from "./MoviesList.module.css"
import {Genres} from "../../GenresContainer/Genres";




interface IProps {

}
const MoviesList:FC<IProps> = () => {

    const [moviesRes, setMoviesRes] = useState<IData>({page: null, results: [], total_pages: null})
    const {page, prev, next}: IPaginationData = usePageQuery()
    const [searchParams] = useSearchParams()
    const id: string = searchParams.get("id")
    const word: string = searchParams.get("query")
    const {flag} =useAppFlagContext()



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

    if (moviesRes.total_pages >= 500) {
        moviesRes.total_pages = 500
    }

    console.log(page)

    return (
        <div className={css.main_div}>
            {!flag && <Genres/>}
            <p>You appear on page {page} of {moviesRes.total_pages}</p>
            <div className={css.movies_list}>
                {moviesRes.results.map(movie => <MoviesListCard movie={movie} key={movie.id} />)}
            </div>
            <div className={css.button_container}>
                <button disabled={page === "1"} onClick={prev}>prev</button>
                <div className={css.totalPage}><p>{page}</p></div>
                <button disabled={+page === moviesRes.total_pages} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {MoviesList};