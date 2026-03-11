import { useEffect, useState } from "react"
import './Home.css'
function Home() {
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(true);
    let [show, setShow] = useState(6);
    let [error, setError] = useState(null);
    useEffect(() => {
        async function takeData() {
            try {
                const res = await fetch("https://dummyjson.com/products");
                const data = await res.json();

                setProducts(data.products);
                setLoading(false)
            }catch(e){
                setError("Error")
                setLoading(false)
            }    
        }
        takeData();
    }, [])
    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }
    if(error){
        return(
            <h1>Error...</h1>
        )
    }
    return (
        <div className="body">
            <h1>Load More</h1>
            <div className="stars">
                {
                    products.slice(0,show).map((item) => (
                        <img key={item.id} src={item.thumbnail} alt={item.title} />
                    ))
                }
            </div>
            { show < products.length && <button onClick={() => 
                    setShow(prev => Math.min(prev + 6, products.length))}>Load More</button>}
        </div>
    )
}
export default Home
