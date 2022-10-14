import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useNavigate} from "react-router-dom";


const TabProduct = ({item, addToCart}) => {
    const navigate = useNavigate();

    const handleDes = () => {
        // navigate("/des")
    }

  return (
    <div className="row-4 cursor-pointer">
        <div className="md:w-[250px] 3xs:w-[200px] h-[300px] border-4 shadow-lg" onClick={handleDes()}>
            <div className="w-auto h-[50%] bg-teal-500">
                <img className="w-[100%] h-[100%] object-contain" src={item.image} alt="Sunset in the mountains" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <div className="text-red-500">${item.price}</div>
                <div className=" flex flex-row mt-4">
                    <FavoriteBorderIcon className="mr-4" />
                    <ShoppingCartOutlinedIcon className="" onClick={() => addToCart(item)} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TabProduct