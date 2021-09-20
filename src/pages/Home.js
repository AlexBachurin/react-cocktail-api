import React from 'react'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'
import Categories from '../components/Categories'

const Home = () => {

    return (
        <main>
            <section className="section search">
                <SearchForm />
            </section>
            <Categories />
            <section className="section cocktails">
                <h2 className="section-title">Cocktails</h2>
                <CocktailList />

            </section>
        </main>
    )
}

export default Home
