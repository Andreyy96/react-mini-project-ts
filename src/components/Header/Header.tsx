import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
import {PropsWithChildren, useState} from "react";
import {set} from "react-hook-form";

import {FC} from 'react';
import {useAppFlagContext} from "../../hooks/useAppFlagContext";
import {ISetState} from "../../types";
import {useAppContext} from "../../hooks/useAppContext";

interface IProps extends PropsWithChildren{

}
const Header:FC<IProps> = ({children}) => {

   const {setFlag} = useAppFlagContext()
   const {setWord} = useAppContext()

    const change: () => void = () => {
        document.body.classList.toggle("warning");
    }

    const giveSearchForm = () => {
        setFlag(prevState => !prevState)
    }

    return (
        <div className={css.Header}>
            <div>
                <h2>Movies List</h2>
            </div>
            <div>
                <NavLink to={"movies"} onClick={() => setWord(null)}>Movies</NavLink>
                <NavLink to={"genres"} onClick={() => setWord(null)}>Genres</NavLink>
                <button onClick={giveSearchForm}>Search</button>
            </div>
            <div>
                <label className={css.switch}>
                    <input className={css.field} type="checkbox" onClick={change}/>
                    <span className={css.slider} ></span>
                </label>
            </div>
        </div>
    );
};

export {Header}