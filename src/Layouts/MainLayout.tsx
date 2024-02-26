import {Outlet} from "react-router-dom";

import {Header} from "../components/Header/Header";
import {SearchForm} from "../components/SearchContainer/SearchForm";
import React from "react";
import {useAppFlagContext} from "../hooks/useAppFlagContext";

const MainLayout = () => {
    const {flag} = useAppFlagContext()

    return (
        <div>
            <Header/>
            {flag && <SearchForm/>}
            <Outlet/>
        </div>
    );
};

export {MainLayout};