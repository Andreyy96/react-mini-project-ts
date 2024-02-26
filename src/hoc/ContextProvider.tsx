import {createContext, FC, PropsWithChildren, useState} from "react";
import {ISetState} from "../types";


const Context = createContext<{ word: string, setWord:ISetState<string> }>(null)
const FlagContext = createContext<{flag: boolean, setFlag: ISetState<boolean>}>(null)

interface IProps extends PropsWithChildren {

}

const ContextProvider: FC<IProps> = ({children}) => {

    const [word, setWord] = useState<string>(null)
    const [flag, setFlag] = useState<boolean>(false)
    
    
    return (
        <Context.Provider value={{word, setWord}}>
            <FlagContext.Provider value={{flag, setFlag}}>
                {children}
            </FlagContext.Provider>
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context,
    FlagContext

};