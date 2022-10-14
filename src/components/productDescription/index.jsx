import React from "react";
import Navbar from "../navbar/index.jsx";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import One from "../../assets/x.jpg"


const ProductDescription = () => {
    return (
        <div>
            <Navbar />

            <a href="#">Chairs &nbsp;  </a>

            <div className="text-center m-12">
                <h1>Product Description</h1>
            </div>
            <div className=" flex flex-row flex-wrap justify-evenly  items-start ">
                <div className=" flex flex-col w-[300px] h-[auto]  ">
                    <img src={One} className=" w-[100%] h-[100%] object-contain " />
                </div>

                <div className=" flex flex-col">
                    <h1>Title</h1>
                    <p>Description</p>
                    <p>$ 50.00</p>

                    <br />

                    <div>
                        <FavoriteBorderIcon className="mr-8" />

                        <ShoppingCartOutlinedIcon />

                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductDescription;


