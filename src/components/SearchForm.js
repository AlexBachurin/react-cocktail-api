import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
    const { setSearchTerm, term } = useGlobalContext();
    return (
        <form className="search-form">
            <div className="form-control">
                <label htmlFor="name">search cocktail</label>
                <input value={term} onChange={setSearchTerm} type="text" id="name" name="name" />
            </div>
        </form>
    )
}

export default SearchForm
