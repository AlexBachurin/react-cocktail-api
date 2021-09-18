import React, { useContext } from "react";
import { useFetch } from "./useFetch";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const { loading, products } = useFetch(url);
    console.log(products);
    return <AppContext.Provider value={{

    }}>
        {children}
    </AppContext.Provider>
}

//custom hook

const useGlobalContext = () => {
    return useContext(AppContext);
}


export { useGlobalContext, AppContext }