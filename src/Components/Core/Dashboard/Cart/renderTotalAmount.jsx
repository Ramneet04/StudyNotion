import React from 'react'
import { useSelector } from 'react-redux'
import ModalBtn from '../../../common/ModalBtn';

const RenderTotalAmount = () => {

    const {total, cart} = useSelector((state) => state.cart);


    const handleBuyCourse = () => {
        // fetch all course we want to buy or added in cart
        const courses = cart.map((course) => course._id);
        console.log("Bought these course:", courses);
        //TODO: API integrate -> payment gateway tak leke jaegi
    }
  return (
    <div className="min-w-[280px] rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
      <p className="mb-1 text-sm font-medium text-richblack-300">Total:</p>
      <p className="mb-6 text-3xl font-medium text-yellow-100">₹ {total}</p>
      <ModalBtn
        text="Buy Now"
        onclick={handleBuyCourse}
        customClasses="w-full justify-center bg-yellow-50 text-richblack-900"
      />
    </div>
  )
}

export default RenderTotalAmount
