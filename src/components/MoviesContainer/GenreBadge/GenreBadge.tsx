import {FC} from 'react';

interface IProps {
    genre_id: number
}
const GenreBadge:FC<IProps> = ({genre_id}) => {
    return (
        <div>
            GenreBadge
        </div>
    );
};

export {GenreBadge};