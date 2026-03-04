import { useContext, useEffect, useState } from 'react';
import './Shipping.css'
import { Link } from 'react-router-dom'
import cartList from '../CartList';

function Shipping({ product }) {

    let { actionCart } = useContext(cartList)
    let data = product.data;

    return (
        <div className='ship'>
            <Link to={`/products/` + product.id} >
                <img className='ship-img' src={data.thumbnail} />
                <h2>{data.title}</h2>
                <p className='desc'>{data.description}</p>
                <h3 style={{
                    color: "white"
                }}>Total: {product.totalAmount ? product.totalAmount : 1}</h3>
                <p className='rate'>{data.rating}</p>
                <p className='price'>${data.price}</p>
            </Link>
            <button className='btn' onClick={() => actionCart("remove",product.id,product)} >Remove</button>
        </div>
    )

}

export default Shipping
