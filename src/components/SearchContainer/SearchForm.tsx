import {SubmitHandler, useForm} from "react-hook-form";
import {ISearchWord} from "../../interfaces";
import {useAppFlagContext} from "../../hooks/useAppFlagContext";
import {useAppContext} from "../../hooks/useAppContext";
import {useNavigate} from "react-router-dom";



const SearchForm = () => {
    const {register, handleSubmit} = useForm<ISearchWord>()
    const  {setFlag} = useAppFlagContext()
    const {setWord} = useAppContext()

    const navigate = useNavigate()

    const search:SubmitHandler<ISearchWord> = (query) => {
        setFlag(false)
        setWord(query.searchWord)
        navigate(`/movies?query=${query.searchWord}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input type={"text"} placeholder={"Word"} {...register("searchWord")}/>
                <button>Search</button>
            </form>
    </div>
    );
};

export {SearchForm}