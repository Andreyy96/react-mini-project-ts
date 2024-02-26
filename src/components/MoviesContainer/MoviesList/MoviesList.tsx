import React, {FC, useEffect, useState} from 'react';


import {movieService} from "../../../services";
import {MoviesListCard} from "../MoviesListCard";

import {useSearchParams} from "react-router-dom";
import {useAppContext} from "../../../hooks/useAppContext";
import {IData, IPaginationData} from "../../../interfaces";
import {UsePaganationPage} from "../../../hooks";


interface IProps {

}
const MoviesList:FC<IProps> = () => {

    const [moviesRes, setMoviesRes] = useState<IData>({page: null, results: []})
    const {page, prev, next}: IPaginationData = UsePaganationPage()
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")
    const word = searchParams.get("query")

    // const {word} = useAppContext()


    useEffect(() => {
        if (id) {
            movieService.getByGenre(id, page).then(({data}) => setMoviesRes(data))
        }
        else if (word) {
            movieService.getSearchAll(word, page).then(({data}) => setMoviesRes(data))
        }
        else {
            movieService.getAll(page).then(({data}) => setMoviesRes(data))
        }
    }, [page, id, word]);

    return (
        <div>
            <div>
                {moviesRes.results.map(movie => <MoviesListCard movie={movie} key={movie.id} />)}
            </div>
            <div>
                <button disabled={page==='1'} onClick={prev}>prev</button>
                <button disabled={!page} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {MoviesList};