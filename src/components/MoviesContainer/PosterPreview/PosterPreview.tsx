import {FC} from 'react';

import css from "./PosterPreview.module.css"

interface IProps {
    poster_url: string
}
const PosterPreview:FC<IProps> = ({poster_url}) => {

    return (
        <img className={css.poster} src={`https://Image.tmdb.org/t/p/w500${poster_url}`}  alt={poster_url}/>
    );
};

export {PosterPreview};