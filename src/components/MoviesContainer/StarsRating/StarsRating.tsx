import {FC} from 'react';
import ReactStars from "react-stars"

import css from "./StartsRating.module.css"

interface IProps {
    rating: number
}
const StarsRating:FC<IProps> = ({rating}) => {

    return (
        <div className={css.rating}>
            <ReactStars className={css.rating} count={10} value={rating} edit={false} size={16} color2={'#ffd700'}/>
        </div>
    );
};

export {StarsRating};

