import React from 'react'
import { useGlobalContext } from '../context';
import Loading from './Loading';
import Cocktail from './Cocktail';
const CocktailList = () => {
    const { drinks, loading } = useGlobalContext();
    //then fetching show loading svg
    if (loading) {
        return <Loading />
    }
    //if there is no drinks show something
    if (drinks.length === 0) {
        return (
            <div className="no-drink">
                There is nothing here, but chickens
            </div>
        )
    }
    return (
        <div className="cocktails-center">
            {drinks.map(cocktail => {
                return <Cocktail key={cocktail.id} {...cocktail} />
            })}
        </div>
    )
}

export default CocktailList
