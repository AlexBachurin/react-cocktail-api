import { useState, useEffect } from 'react'


export const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([])


    const getData = async () => {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
        setLoading(false)
    }

    useEffect(() => {
        getData();

    }, [url])

    return { loading, products };
}