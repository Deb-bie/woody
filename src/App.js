import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import Home from "./containers/homepage/index"
import Chairs from "./containers/chairs/index";
import Beds from "./containers/beds/index"
import Tables from "./containers/tables/index"
import Dining from "./containers/dining-sets/index"
import Couches from "./containers/couches/index"
import ProductDescription from "./components/productDescription/index.jsx";
import Cart from "./containers/cart/Cart";

import Navbar from "./components/navbar";
import Footer from "./components/footer"


import FeaturedProductsData from "./data/featuredProductsData";

import Data from "./flash/flashData.js"
import FlashDeals from "./flash/flashDeals.jsx"
import Search from "./flash/flashNav.jsx"
import Using from "./flash/index.jsx";

function App() {
  const fp = FeaturedProductsData;
  const { productItems } = Data


  // // we are setting the items in the cart to an empty array
  const [cartItem, setCartItem] = useState([])

  // // Function to add products to cart
  // const addToCart = (product) => {
  //   // checking if product  already exists in the cart
  //   const productExist = cartItem.find((item) => item.id === product.id);
    
  //   if (!productExist) {
  //     // setCartItem([...cartItem, { ...product, qty:1 }])
  //     setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item)))
  //   } else {
  //     setCartItem(cartItem.map((item) => item));
  //   }
  // }



  // function to increase the quantity of items in the cart
  // const increaseQty = (product) => {
  //   const productExist = cartItem.find((item) => item.id === product.id);

  //   if (productExist.qty === 1) {
  //     setCartItem(product.map((item) => (item.id === product.is ? { ...productExist, qty: productExist.qty + 1} : item)))
  //   } else {
  //     setCartItem([...cartItem, { ...product, qty: 1 }])
  //   }
  // }




  // // function to decrease the quantity of items in the cart
  // const decreaseQty = (product) => {
  //   const productExist = cartItem.find((item) => item.id === product.id)

  //   if (productExist.qty === 1) {
  //     setCartItem(cartItem.filter((item) => item.id !== product.id))
  //   } else {
  //     setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty - 1} : item)))
  //   }
  // }











  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }


  const increaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty >=   1) {
      // setCartItem(cartItem.filter((item) => item.id !== product.id))
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      // setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    }
  }








































  return (
    <Router>
      {/* <Navbar cartItem={cartItem} /> */}
      <Search cartItem={cartItem} />
      <Routes>

      <Route path='/' exact element={<FlashDeals addToCart={addToCart} />} />

      {/* <Route path='/' exact element={<Using productItems={productItems} addToCart={addToCart} />} /> */}


      <Route path='/cart' exact element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} increaseQty={increaseQty} />} />
  
            







        {/* <Route exact path="/" element={<Home cartItem={cartItem} addToCart={addToCart} increaseQty={increaseQty} decreaseQty={decreaseQty} fp={fp}  />} /> */}
        {/* <Route path="/chairs" element={<Chairs cartItem={cartItem} addToCart={addToCart} increaseQty={increaseQty} decreaseQty={decreaseQty} />} /> */}
        {/* <Route path="/ tables" element={<Tables />}  /> */}
        {/* <Route path="/ beds" element={<Beds />} /> */}
        {/* <Route path="/ dining-sets" element={<Dining />} /> */}
        {/* <Route path="/ couches" element={<Couches />} /> */}
        {/* <Route path="/" element={<ProductDescription />} /> */}


        {/* <Route path="/cart" element={<Cart cartItem={cartItem} addToCart={addToCart} increaseQty={increaseQty} decreaseQty={decreaseQty} />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
