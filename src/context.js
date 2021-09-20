import React, { useContext, useState, useEffect } from "react";
// import { useFetch } from "./useFetch";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='



const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    //state for search term in input
    const [term, setTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [drinks, setDrinks] = useState([]);
    //state for filter
    const [filterWord, setFilterWord] = useState('');
    //create searchTerm for urlwith search
    const searchTerm = `${url}${term}`;

    const getData = async () => {
        setLoading(true);
        try {
            const res = await fetch(searchTerm);
            const data = await res.json();
            //get drinks object from our data
            const { drinks } = data;
            //iterate only if there is drinks
            if (drinks) {
                //get from data only properties that we need
                const newDrinks = drinks.map(item => {
                    const {
                        idDrink,
                        strDrink,
                        strAlcoholic,
                        strDrinkThumb,
                        strGlass
                    } = item;
                    //and return new item with this properties
                    return {
                        id: idDrink,
                        name: strDrink,
                        alcoholic: strAlcoholic,
                        image: strDrinkThumb,
                        glass: strGlass
                    }
                })
                setDrinks(newDrinks);
            } else {
                setDrinks([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    const setSearchTerm = (e) => {
        setTerm(e.target.value);
    }

    const filterClickHandler = (e) => {
        setFilterWord(e.target.textContent);
    }
    const filterAlcoholic = (filterWord) => {
        const fetchAlcoholic = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filterWord}`);
                const data = await response.json();
                console.log(data);
                const { drinks } = data;
                //iterate only if there is drinks
                if (drinks) {
                    //get from data only properties that we need
                    const newDrinks = drinks.map(item => {
                        const {
                            idDrink,
                            strDrink,
                            strAlcoholic,
                            strDrinkThumb,
                            strGlass
                        } = item;
                        //and return new item with this properties
                        return {
                            id: idDrink,
                            name: strDrink,
                            alcoholic: strAlcoholic,
                            image: strDrinkThumb,
                            glass: strGlass
                        }
                    })
                    setDrinks(newDrinks);
                } else {
                    setDrinks([]);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
            setLoading(false);
        }
        fetchAlcoholic();
    }

    //fetch drinks on every url change
    useEffect(() => {
        getData();

    }, [term]);

    //fetch on every filterWord change 
    useEffect(() => {
        filterAlcoholic(filterWord);
    }, [filterWord])


    return <AppContext.Provider value={{
        drinks,
        loading,
        setSearchTerm,
        term,
        filterClickHandler


    }}>
        {children}
    </AppContext.Provider>
}

//custom hook

const useGlobalContext = () => {
    return useContext(AppContext);
}


export { useGlobalContext, AppContext }