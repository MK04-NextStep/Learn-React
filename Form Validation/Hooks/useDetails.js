import { useState, useEffect } from 'react'
import axios from 'axios'

function useDetail() {

    let [products, setProducts] = useState([]);
    let [loading, setLoading]= useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        axios
            .get("https://dummyjson.com/products")
            .then((res) => {
                setProducts(res.data.products);
                setLoading(false);
            }).catch((err) => {
                setLoading(false);
                setError("error")
            })
    }, [])

    return {products, loading, error}
}

export default useDetail
