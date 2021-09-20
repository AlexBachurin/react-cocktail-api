import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';



const SingleCocktail = () => {
    //get id from Link params
    const { id } = useParams();
    //state for single cocktail and loading
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null)
    //fetch cocktail from lookup
    const fetchCocktail = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            const { drinks } = data;
            //if we have drink back set them
            if (drinks) {
                const {
                    strDrink: name,
                    strDrinkThumb: image,
                    strGlass: glass,
                    strAlcoholic: alco,
                    strInstructions: instructions,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                } = drinks[0];
                setCocktail({
                    name, image, glass, alco, instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5
                })
            } else {
                setCocktail([])
            }

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        setLoading(false);

    }
    useEffect(() => {
        fetchCocktail();
    }, [id]);

    //check for loading
    if (loading) {
        return (
            <Loading />
        )
    }
    //also check if we have a cocktail so we wont break our app
    if (!cocktail) {
        return (
            <div className="no-drink">
                there is nothing but chickens there
            </div>
        )
    }
    return (
        <section className="section cocktail-section">
            <Link to='/' className="btn btn-primary">
                back home
            </Link>
            <h2 className="section-title">{cocktail.name}</h2>
            <article className="drink">
                <img src={cocktail.image} alt={cocktail.name} />
                <div className="drink-info">
                    <p>
                        <span className="drink-data">name:</span>
                        {cocktail.name}
                    </p>
                    <p>
                        <span className="drink-data">category:</span>
                        {cocktail.category}
                    </p>
                    <p>
                        <span className="drink-data">alco:</span>
                        {cocktail.alco}
                    </p>
                    <p>
                        <span className="drink-data">glass:</span>
                        {cocktail.glass}
                    </p>
                    <p>
                        <span className="drink-data">instructions:</span>
                        {cocktail.instructions}
                    </p>
                    <p>
                        <span className="drink-data">ingredients:</span>
                        {`${cocktail.strIngredient1} ${cocktail.strIngredient2} ${cocktail.strIngredient3} ${cocktail.strIngredient4} ${cocktail.strIngredient5}`}
                    </p>

                </div>
            </article>
        </section>
    )
}

export default SingleCocktail
