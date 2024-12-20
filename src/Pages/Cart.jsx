import React, { useContext, useEffect } from 'react'
import { Shopcontext } from '../Context/ShopContext'
import all_product from './../Utils/all_product';
import EmptyCart from '../assets/EmptyCart.png'

const Cart = () => {

  const {getTotalCartAmount, all_product, cartItems, removeFromCart, getTotalCartItems} = useContext(Shopcontext)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className='mt-32'>
       <div className='max-w-7xl mx-auto my-10 p-4'>
        {getTotalCartItems() === 0 ? (
          <div className='flex items-center justify-center'>
            <img src={EmptyCart} alt="" />
          </div>
        ):(
          <div></div>
        )}
       </div>
    </div>
  )
}

export default Cart