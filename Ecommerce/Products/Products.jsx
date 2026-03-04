import Cards from "./Cards"
import { useEffect, useState } from "react";
import './Products.css'
import axios from 'axios'
function Products() {
    let [products, setProduct] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        setLoading(true)
        axios
            .get("https://dummyjson.com/products")
            .then((res) => {
                setProduct(res.data.products);
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                setError("Error")
            })

    }, [])

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    } else if (error) {
        return (
            <h1 style={{
                color: "white"
            }}>No Products Yet...</h1>
        )
    } else {
        return (

            <div className="products" >
                {
                    products.map((product) => (
                        <Cards key={product.id} product={product} />
                    ))
                }
            </div>
        )
    }
}

export default Products
