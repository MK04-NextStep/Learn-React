import Products from "./Products/Products"
import Navbar from "./Navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Item from './Item/Item'
import Cart from "./Cart/Cart";
import './App.css'
import Footer from "./Footer";
function App() {

  return (
    <div className="container">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/products/:id" element={<Item />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes> 

      <Footer />
    </div>
  )
}

export default App
