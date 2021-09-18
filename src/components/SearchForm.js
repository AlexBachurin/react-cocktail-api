import React from 'react'

const SearchForm = () => {
    return (
        <form className="search-form">
            <div className="form-control">
                <label htmlFor="name">search cocktail</label>
                <input type="text" id="name" name="name" />
            </div>
        </form>
    )
}

export default SearchForm
