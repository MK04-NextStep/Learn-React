import React, { useContext } from 'react'
import cartList from '../CartList'
import './CartDetail.css'
function CartDetail() {

    let { cart, total } = useContext(cartList);

    function calculatePrice(item) {
        let discount = item.data.price * (item.data.discountPercentage / 100);
        let price = item.data.price - discount;

        return price * item.totalAmount;
    }

    let totalMoney = cart.reduce((acc, item) => acc += calculatePrice(item), 0);

    return (
        <div className="cart-receipt">
            <ul>
                <li>
                    <p>Total Product</p>
                    <p>{total}</p>
                </li>
                <li>
                    <p>Total Amount</p>
                    <p>{totalMoney.toFixed(2)}</p>
                </li>
            </ul>
           
        </div>
    )

}

export default CartDetail
