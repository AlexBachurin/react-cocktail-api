import React from 'react'
import { useGlobalContext } from '../context'

const Categories = () => {
    const { categories, loading } = useGlobalContext();
    // if (loading) {
    //     return (
    //         <h3>Loading...</h3>
    //     )
    // }
    if (!categories) {
        return (
            <h3 className="loading-title">Loading...</h3>
        )
    }
    return (
        <section className='section category'>
            <div className="category-container">
                {categories.map((category, index) => {
                    return (
                        <button key={index}>{category}</button>
                    )
                })}
            </div>
        </section>
    )
}

export default Categories
