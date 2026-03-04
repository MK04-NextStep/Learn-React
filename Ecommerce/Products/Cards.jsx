import { useContext } from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'
import cartList from '../CartList'
function Cards({ product }) {

    let { actionCart } = useContext(cartList)

    return (
        <div className='box'>
            <Link to={`/products/` + product.id}>
                <img src={product.thumbnail} />
                <h2>{product.title}</h2>
                <p className='desc'>{product.description}</p>
                <p className='rate'>{product.rating}</p>
                <p className='price'>${product.price}</p>
                <p className='discount'> {product.discountPercentage}% off</p>
            </Link>
            <button className='btn' onClick={()=> actionCart("add",product.id,product)} >Add to Cart</button>
        </div>
    )
}

export default Cards
