import React from 'react'
import { useGlobalContext } from '../context'

const Categories = () => {
    const { filterClickHandler, filterWord } = useGlobalContext();
    let clsNameAlc = '';
    let clsNameNonAlc = '';
    if (filterWord === 'Alcoholic') {
        clsNameAlc += ' active-btn'
    } else if (filterWord === 'Non_Alcoholic') {
        clsNameNonAlc += ' active-btn';
    }
    return (
        <section className='section category'>
            <div className="category-container">
                <button className={clsNameAlc} onClick={filterClickHandler}>Alcoholic</button>
                <button className={clsNameNonAlc} onClick={filterClickHandler}>Non_Alcoholic</button>
            </div>
        </section>
    )
}

export default Categories
