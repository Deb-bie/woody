import React from 'react'
import FeaturedProducts from '../featuredProducts'
import LatestProducts from '../latestProducts'
import Offers from '../offer';
import ParallaxSection from "../parallax/"
import Trial from "../parallax/try.jsx"



const Featured = ({addToCart, fp}) => {
  return (
    <div className="items-center mt-12">
        <FeaturedProducts addToCart={addToCart} fp={fp} />
        <br />

        <LatestProducts addToCart={addToCart} />
        <br />

        <ParallaxSection />
        <br />

        <Trial />
        <br />

        <Offers />
    </div>
  )
}

export default Featured