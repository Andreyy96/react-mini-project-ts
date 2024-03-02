import {FC} from 'react';
import {NavLink} from "react-router-dom";

import {IGenre} from "../../../interfaces";
import css from "./Genre.module.css"

interface IProps {
    genre: IGenre
}
const Genre:FC<IProps> = ({genre}) => {

    const {id,name} = genre

    return (
        <NavLink className={css.genre} to={`/movies?id=${id}&page=1`}><p>{name}</p></NavLink>
    );
};

export {Genre};