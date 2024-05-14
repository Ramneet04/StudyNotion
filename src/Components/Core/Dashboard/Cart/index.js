import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const {total, totalItems} = useSelector((state) => state.cart);
  return (
    <div className='text-richblack-5'>
        <h1>Your Cart</h1>
        <p>{totalItems} Courses in Cart</p>

        {
            total > 0 ? (<div>

            </div>) : ( <p>Your Cart is Empty</p>)

        }
    </div>
  )
}

export default Cart