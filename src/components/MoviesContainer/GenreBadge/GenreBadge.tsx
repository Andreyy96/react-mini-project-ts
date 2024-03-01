import {FC} from 'react';
import {NavLink} from "react-router-dom";
import Badge from "@mui/material/Badge";

interface IProps {
    genre: {id: number, name: string}
}
const GenreBadge:FC<IProps> = ({genre}) => {
    const {id, name} = genre
    return (
        <Badge badgeContent={<NavLink to={`/movies?id=${id}`}>{name}</NavLink>} color={"primary"}></Badge>
    );
};

export {GenreBadge};