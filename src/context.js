import React, { useContext, useState } from "react";
import { useFetch } from "./useFetch";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    //state for search term in input
    const [term, setTerm] = useState('a');
    //create searchTerm for urlwith search
    const searchTerm = `${url}${term}`;
    const { loading, drinks } = useFetch(searchTerm);
    console.log(drinks);

    const setSearchTerm = (e) => {
        setTerm(e.target.value);
    }
    return <AppContext.Provider value={{
        drinks,
        loading,
        setSearchTerm,
        term

    }}>
        {children}
    </AppContext.Provider>
}

//custom hook

const useGlobalContext = () => {
    return useContext(AppContext);
}


export { useGlobalContext, AppContext }