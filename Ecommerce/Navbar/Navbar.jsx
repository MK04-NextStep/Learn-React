import './Navbar.css'
import { Link } from 'react-router-dom'
import { LuShoppingCart } from "react-icons/lu";
import { useContext } from 'react';
import cartList from '../CartList';

function Navbar() {
    let {total} = useContext(cartList)

    return (
        <nav>
            <Link className='header' to="/"><h1>E-Commerce Me</h1></Link>
            <Link className='cart-link' to="/cart"><LuShoppingCart /><p>{total}</p></Link>
        </nav>
    )
}

export default Navbar
