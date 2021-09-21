import React, { useContext, useState, useEffect, useCallback } from "react";
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

    const getData = useCallback(async () => {
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
                        strGlass,
                        strCategory
                    } = item;
                    //and return new item with this properties
                    return {
                        id: idDrink,
                        name: strDrink,
                        alcoholic: strAlcoholic,
                        image: strDrinkThumb,
                        glass: strGlass,
                        category: strCategory
                    }
                })
                //filter drinks if category is chosen
                if (filterWord) {
                    let tempVar = ''
                    if (filterWord === 'Non_Alcoholic') {
                        tempVar = 'Non alcoholic'
                    } else {
                        tempVar = 'Alcoholic';
                    }
                    const filterDrinks = newDrinks.filter(item => {
                        return item.alcoholic === tempVar;
                    })
                    setDrinks(filterDrinks);
                    //if category is not chosen then dont filter it
                } else {
                    setDrinks(newDrinks);
                }

            } else {
                setDrinks([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [filterWord, searchTerm])
    const setSearchTerm = (e) => {
        //transform to lower case for easier search
        setTerm(e.target.value.toLowerCase());
    }

    const filterClickHandler = (e) => {
        let tempVar = '';
        if (e.target.textContent === 'Non Alcoholic') {
            tempVar = 'Non_Alcoholic';
        } else {
            tempVar = 'Alcoholic'
        }
        setFilterWord(tempVar);
    }
    // const fetchAlcoholic = useCallback(async (filterWord) => {
    //     setLoading(true);
    //     try {
    //         const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filterWord}`);
    //         const data = await response.json();
    //         const { drinks } = data;
    //         console.log('fetch drinks')
    //         //iterate only if there is drinks
    //         if (drinks) {
    //             //get from data only properties that we need
    //             const newDrinks = drinks.map(item => {
    //                 const {
    //                     idDrink,
    //                     strDrink,
    //                     strAlcoholic,
    //                     strDrinkThumb,
    //                     strGlass
    //                 } = item;
    //                 //and return new item with this properties
    //                 return {
    //                     id: idDrink,
    //                     name: strDrink,
    //                     alcoholic: strAlcoholic,
    //                     image: strDrinkThumb,
    //                     glass: strGlass
    //                 }
    //             })
    //             //if we have some words in searchTerm when filter them, to show only drinks that have it in name
    //             if (term) {
    //                 const filteredDrinks = newDrinks.filter(item => {
    //                     //transform to lowerCase since we have term in lower case already it should match even if we type in caps
    //                     return item.name.toLowerCase().includes(term)
    //                 })
    //                 console.log(filteredDrinks)
    //                 setDrinks(filteredDrinks);
    //             } else {
    //                 setDrinks(newDrinks);
    //             }
    //         } else {
    //             setDrinks([]);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         setLoading(false);
    //     }
    //     setLoading(false);
    // }, [term])


    //reset input on every home click
    const resetOnHome = () => {
        setTerm('');
        setFilterWord('');
    }
    //fetch drinks on every url change
    useEffect(() => {
        getData();

    }, [term, getData]);

    // //fetch on every filterWord change 
    // useEffect(() => {
    //     fetchAlcoholic(filterWord);
    // }, [filterWord, fetchAlcoholic])


    return <AppContext.Provider value={{
        drinks,
        loading,
        setSearchTerm,
        term,
        filterClickHandler,
        filterWord,
        resetOnHome


    }}>
        {children}
    </AppContext.Provider>
}

//custom hook

const useGlobalContext = () => {
    return useContext(AppContext);
}


export { useGlobalContext, AppContext }