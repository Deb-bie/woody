import React from 'react';
import Featured from '../../components/featured/index.jsx';
import SliderComponent from '../../components/slider/slider.jsx';


const Home = ({addToCart, increaseQty, decreaseQty, fp}) => {
  return (
    <>
      <div className="myhome">
        <SliderComponent />
        <Featured addToCart={addToCart} fp={fp} />
      </div>
    </>
  )
}

export default Home;