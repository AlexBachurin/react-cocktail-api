import React from 'react'
import { useGlobalContext } from '../context';
import Loading from './Loading';
import Cocktail from './Cocktail';
const CocktailList = () => {
    const { drinks, loading } = useGlobalContext();
    if (loading) {
        return <Loading />
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
