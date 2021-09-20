import React from 'react'
import { useGlobalContext } from '../context'

const Categories = () => {
    const { filterClickHandler } = useGlobalContext();

    return (
        <section className='section category'>
            <div className="category-container">
                <button onClick={filterClickHandler}>Alcoholic</button>
                <button onClick={filterClickHandler}>Non_Alcoholic</button>
            </div>
        </section>
    )
}

export default Categories
