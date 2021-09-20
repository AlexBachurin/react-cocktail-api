import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
    const { setSearchTerm, term } = useGlobalContext();
    const inputRef = React.useRef(null);

    //set focus on input on page load
    React.useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }} className="search-form">
            <div className="form-control">
                <label htmlFor="name">search cocktail</label>
                <input ref={inputRef} value={term} onChange={setSearchTerm} type="text" id="name" name="name" />
            </div>
        </form>
    )
}

export default SearchForm
