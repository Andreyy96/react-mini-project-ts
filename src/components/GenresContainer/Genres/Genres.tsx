import {FC, useEffect, useState} from 'react';

import {genreService} from "../../../services";
import {IResGenres} from "../../../interfaces";
import {Genre} from "../Genre";
import css from "./Genres.module.css"


interface IProps {

}
const Genres:FC<IProps> = () => {

    const [genresArr, setGenresArr] = useState<IResGenres>({genres: []})


    useEffect(() => {
        genreService.getAll().then(({data}) => setGenresArr(data))
    }, []);



    return (
        <div className={css.genres_div}>
            <div className={css.genres_list}>
                {genresArr.genres.map(genre => <Genre genre={genre} key={genre.id}/>)}
            </div>
        </div>
    );
};

export {Genres};