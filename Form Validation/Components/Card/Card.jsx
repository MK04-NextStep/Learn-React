import './Cards.css'
function Cards({ product }) {
    
    return (
        <div className='card'>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Rating: {product.rating}</p>
            <p>Price: {product.price}</p>
        </div>
    )
}

export default Cards
