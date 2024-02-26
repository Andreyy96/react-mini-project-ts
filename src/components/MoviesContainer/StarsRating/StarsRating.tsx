import {FC} from 'react';
import ReactStars from 'react-stars'

interface IProps {
    rating: number
}
const StarsRating:FC<IProps> = ({rating}) => {

    return (
        <div>
            <ReactStars count={10} value={rating} edit={false} size={15} color2={'#ffd700'} />
        </div>
    );
};

export {StarsRating};

