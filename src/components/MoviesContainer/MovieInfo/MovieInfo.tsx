import React, {FC} from 'react';

import {IMovie} from "../../../interfaces";


interface IProps {
    movieDetails: IMovie
}
const MovieInfo:FC<IProps> = ({movieDetails}) => {


    // const {
    //     original_title,
    //     vote_average,
    //     adult,
    //     poster_path,
    //     genre_ids,
    //     homepage,
    //     original_language,
    //     budget,
    //     release_date,
    //     overview
    // } = movieDetails

    return (
        <div>
        {/*     <div>*/}
        {/*         <h3>{original_title}</h3>*/}
        {/*     </div>*/}
        {/*     <div>*/}
        {/*         <PosterPreview poster_url={poster_path}/>*/}
        {/*     </div>*/}
        {/*     <div>*/}
        {/*         <Stack direction="horizontal" gap={2}>*/}
        {/*            {genre_ids.map(genre_id => <GenreBadge genre_id={genre_id} key={genre_id}/>)}*/}
        {/*         </Stack>*/}
        {/*     </div>*/}
        </div>
    );
};

export {MovieInfo};