import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import Home from "./containers/homepage/index"
import Chairs from "./containers/chairs/index";
import Beds from "./containers/beds/index"
import Tables from "./containers/tables/index"
import Dining from "./containers/dining-sets/index"
import Couches from "./containers/couches/index"
// import ProductDescription from "./components/productDescription/index.jsx"; 
import Cart from "./containers/cart/Cart";

import Navbar from "./components/navbar";
import Footer from "./components/footer"


import FeaturedProductsData from "./data/featuredProductsData";

function App() {
  const fp = FeaturedProductsData;

  // we are setting the items in the cart to an empty array
  const [cartItem, setCartItem] = useState([])

  // function to add items to cart
  const addToCart = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id)
    if (productExist) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item)))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  // function to decrease the items in cart

  const decreaseQty = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id)
    if (productExist.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : item)))
    }
  }

// function to increase the items in cart
  const increaseQty = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id)
    if (productExist.qty >=   1) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item)))
    }
  }


  return (
    <Router>
      <Navbar cartItem={cartItem} />
      <Routes>
        <Route exact path="/" element={<Home addToCart={addToCart} increaseQty={increaseQty} decreaseQty={decreaseQty} fp={fp}  />} />
        <Route exact path="/%chairs" element={<Chairs cartItem={cartItem} addToCart={addToCart} increaseQty={increaseQty} decreaseQty={decreaseQty} />} />
        <Route path="/%tables" element={<Tables />}  />
        <Route exact path="/%my-beds" element={<Beds />} />
        <Route path="/%dining-sets" element={<Dining />} />
        <Route path="/%couches" element={<Couches />} />
        {/* <Route path="/desc" element={<ProductDescription />} /> */}


        <Route path="/ cart" element={<Cart cartItem={cartItem} increaseQty={increaseQty} decreaseQty={decreaseQty} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
