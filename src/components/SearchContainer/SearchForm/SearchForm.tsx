import {SubmitHandler, useForm} from "react-hook-form";
import {ISearchWord} from "../../../interfaces";

import {useNavigate} from "react-router-dom";
import {useAppContext, useAppFlagContext} from "../../../hooks";
import css from "./SearchForm.module.css"


const SearchForm = () => {
    const {register, handleSubmit} = useForm<ISearchWord>()
    const  {setFlag} = useAppFlagContext()
    const {setWord} = useAppContext()

    const navigate = useNavigate()

    const search:SubmitHandler<ISearchWord> = (query) => {
        setFlag(false)
        setWord(query.searchWord)
        navigate(`movies?query=${query.searchWord}&page=1`)
    }

    return (
        <div className={css.div_form}>
            <form onSubmit={handleSubmit(search)}>
                <input type={"text"} placeholder={"Word"} {...register("searchWord")}/>
                <button>Search</button>
            </form>
    </div>
    );
};

export {SearchForm}