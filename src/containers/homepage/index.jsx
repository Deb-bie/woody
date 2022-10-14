import React from 'react';
import Featured from '../../components/featured/index.jsx';
import Navbar from "../../components/navbar/index.jsx"
import SliderComponent from '../../components/slider/slider.jsx';
import Footer from "../../components/footer"
import MyNav from '../../components/mynavbar/index.jsx';


const Home = ({addToCart, increaseQty, decreaseQty, fp}) => {
  return (
    <>
      <div className="myhome">
        {/* <Navbar cartItem={cartItem} /> */}
        <SliderComponent />
        <Featured addToCart={addToCart} fp={fp} />
        {/* <Footer /> */}
      </div>

      <style jsx>{`
        /* .myhome{
          width: 100%;
        } */

        /* @media (min-width: 50px) and (max-width: 200px) {
          .myhome{
            overflow: auto;
          }
        }
      `} */

      </style>


    </>
  )
}

export default Home;