import {FC} from 'react';
import {Rating} from "@mui/material";

interface IProps {
    rating: number
}
const StarsRating:FC<IProps> = ({rating}) => {

    return (
        <div>
            <Rating name="read-only" defaultValue={rating} max={10} precision={0.1} readOnly size={"small"}/>
        </div>
    );
};

export {StarsRating};

