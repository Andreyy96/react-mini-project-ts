import {Outlet} from "react-router-dom";

import {Header} from "../components/Header/Header";
import {useAppFlagContext} from "../hooks";
import {SearchForm} from "../components/SearchContainer/SearchForm";


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