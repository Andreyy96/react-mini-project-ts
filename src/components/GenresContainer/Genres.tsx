import {FC, useEffect, useState} from 'react';
import {genreService} from "../../services";
import {Genre} from "./genre";
import {IResGenres} from "../../interfaces/res_genreInterface";

interface IProps {

}
const Genres:FC<IProps> = () => {

    const [genresArr, setGenresArr] = useState<IResGenres>({genres: []})


    useEffect(() => {
        genreService.getAll().then(({data}) => setGenresArr(data))
    }, []);



    return (
        <div>
            {genresArr.genres.map(genre => <Genre genre={genre} key={genre.id}/>)}
        </div>
    );
};

export {Genres};