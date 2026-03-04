import cartList from '../CartList';
import './Cart.css'
import CartDetail from './CartDetail';
import Shipping from './Shipping'
import { useContext, useState } from 'react';

function Cart() {

  let {cart} = useContext(cartList)
  return (
    <div className='cart'>
      <h1 >Cart</h1>
      <CartDetail />
      <div className="cart-list" >
        {
          cart.map((item) => (
            <Shipping key={item.id} product={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default Cart
