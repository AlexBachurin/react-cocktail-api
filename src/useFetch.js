import { useState, useEffect } from 'react'


export const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [drinks, setDrinks] = useState([])


    const getData = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
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
                setDrinks(newDrinks)
            } else {
                setDrinks([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();

    }, [url])

    return { loading, drinks };
}