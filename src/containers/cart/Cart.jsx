import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Cart = ({ cartItem, increaseQty, decreaseQty, addToCart }) => {

  // Stpe: 7   calucate total of items
  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <>
      <section className='cart-items bg-[#f6f9fc] h-auto py-[50px] '>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details w-[70%]'>
            {cartItem.length === 0 && <h1 className='no-items product'>No Items are in Cart</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {cartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex bg-white mt-[30px] ' key={item.id}>
                  <div className='img w-[150px] h-[150px] '>
                    <img src={item.cover} alt='' className="h-100 w-100 object-contain " />
                  </div>
                  <div className='cart-details'>
                    <h3 className="text-lg font-bold mt-[20px] " >{item.name}</h3>
                    <h4 className="text-sm mt-[50px] text-grey-50 " >
                      ${item.price}.00 * {item.qty}
                      <span className="text-[#e94560] ml-20px font-[500] ">${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart bg-[none] text-[25px] text-right mr-10px '>
                      <button className='removeCart'>
                        {/* <i className='fa-solid fa-xmark'></i> */}
                        <ShoppingCartOutlinedIcon />
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex mt-[50px] '>
                      <button className='incCart w-[40px] h-[40px] m-[10px] border-rounded text-lg ' onClick={() => increaseQty(item)}>
                        {/* <i className='fa-solid fa-plus'></i> */}
                        <ShoppingCartOutlinedIcon />
                      </button>
                      <button className='desCart bg-yellow-200 ' onClick={() => decreaseQty(item)}>
                        {/* <i className='fa-solid fa-minus'></i> */}
                        <ShoppingCartOutlinedIcon />
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product w-[30%] mt-[30px] ml-[30px] h-[130px] '>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4 className="text-[15px] font-[400] " >Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
