import React from 'react'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'


const Home = () => {

    return (
        <main>
            <section className="section search">
                <SearchForm />
            </section>
            <section className="section">
                <h2 className="section-title">Cocktails</h2>
                <CocktailList />

            </section>
        </main>
    )
}

export default Home
