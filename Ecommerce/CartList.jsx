import { createContext, useReducer } from "react";
import cart_details from "./cart";

const cartList = createContext();

export default cartList

function reducer(products, action) {
    switch (action.type) {
        case "add":
            let check = products.find((item) => item.id == action.id)
            if (check) {
                return products.map((item) => (
                    item.id == action.id ?
                        { ...item, totalAmount: item.totalAmount + 1 } :
                        item
                ))
            } else {
                return [...products, {
                    id: action.product.id,
                    data: action.product,
                    totalAmount: 1
                }]
            }
        case "remove":
            return products.find((item) => item.id == action.id && item.totalAmount > 1) ?
                products.map((item) => (
                    item.id == action.id ?
                        { ...item, totalAmount: item.totalAmount - 1 } : item
                )) :
                products.filter((item) => item.id != action.id)
        default:
            return products

    }
}



function CartListProvider({ children }) {

    let [cart, setCartD] = useReducer(reducer, cart_details || []);

    function actionCart(type, id, product) {
        setCartD({ type, id, product })
    }
    let total = cart.reduce((acc,item) => acc = acc + item.totalAmount,0)


    return (
        <cartList.Provider value={{ total, cart, actionCart }}>
            {children}
        </cartList.Provider>
    )
}

export { CartListProvider }
