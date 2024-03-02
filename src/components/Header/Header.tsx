import {NavLink} from "react-router-dom";
import {FC} from 'react'
import {PropsWithChildren} from "react";


import css from "./Header.module.css"
import {useAppContext, useAppFlagContext} from "../../hooks";
import {UserInfo} from "../UserInfo";
import {ToggleSwitch} from "../ToggleSwitch";


interface IProps extends PropsWithChildren{

}

const Header:FC<IProps> = () => {

   const {setFlag} = useAppFlagContext()
   const {setWord} = useAppContext()


    const giveSearchForm: () => void = () => {
        setFlag(prevState => !prevState)
    }


    return (
        <div className={css.Header}>
            <div>
                <h2>MoviesDB</h2>
            </div>
            <div>
                <NavLink to={""} onClick={() => setWord(null)}>Home</NavLink>
                <NavLink to={"movies"} onClick={() => setWord(null)}>Movies</NavLink>
                <NavLink to={"genres"} onClick={() => setWord(null)}>Genres</NavLink>
            </div>
            <div>
                <button className={css.button_search} onClick={giveSearchForm}><p>Search</p></button>
            </div>
            <ToggleSwitch/>
            <UserInfo/>
        </div>
    );
};

export {Header}