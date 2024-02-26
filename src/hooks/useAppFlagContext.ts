import {useContext} from "react";
import {FlagContext} from "../hoc";

const useAppFlagContext = () => useContext(FlagContext)

export {
    useAppFlagContext
}