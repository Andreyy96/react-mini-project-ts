import {FC} from 'react';
import {IGenre} from "../../interfaces/genreInterface";
import {NavLink} from "react-router-dom";

interface IProps {
    genre: IGenre
}
const Genre:FC<IProps> = ({genre}) => {

    const {id,name} = genre

    return (
        <NavLink to={`/movies?id=${id}`}>{name}</NavLink>
    );
};

export {Genre};