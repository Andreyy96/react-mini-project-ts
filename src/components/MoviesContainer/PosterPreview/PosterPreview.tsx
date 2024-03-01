import {FC} from 'react';

import css from "./PosterPreview.module.css"

interface IProps {
    poster_url: string
}

const PosterPreview:FC<IProps> = ({poster_url}) => {
    const url = "https://Image.tmdb.org/t/p/w500"

    return (
        <img className={css.poster} src={url + poster_url} alt={poster_url}/>
    );
};

export {PosterPreview};