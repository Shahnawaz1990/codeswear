import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Order from '../models/Order'
import mongoose from 'mongoose'

const MyOrder = ({ order }) => {
  const router = useRouter()
  const { id } = router.query
  const products = order.products
  console.log(order.products);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWEAR.COM</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #
              {order.orderId}
            </h1>

            <p className="leading-relaxed mb-4">Your Order has successfully placed</p>
            <div className="flex mb-4">
              <p className="flex-grow text-left text-pink-500 py-2 text-lg px-1">Item Description</p>
              <p className="flex-grow text-center border-gray-300 py-2 text-lg px-1">Quantity</p>
              <p className="flex-grow text-right border-gray-300 py-2 text-lg px-1">Item Total</p>
            </div>
            {Object.keys(products).map((item) => {
              return (
                <div key={item} className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500 text-center">{products[item].name} ({products[item].size}/{products[item].variant})</span>
                  <span className="ml-auto text-gray-900 text-center items-center">{products[item].qty}</span>
                  <span className="ml-auto text-gray-900 text-center items-center">{products[item].price}</span>
                </div>)

            })}



          </div>
<div className='flex flex-col'>
  <span className='title-font font-medium text-2xl text-gray-900'>Subtotal: ₹{order.amount}</span>
  <div className='my-6'>
    <button className='flex mx-0 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded'>Track Order</button>
  </div>

</div>
        </div>
        
      </div>
    </section >
  )
}

export const getServerSideProps = async (context) => {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let order = await Order.findById(context.query.id)
  return {
    props: { order: JSON.parse(JSON.stringify(order)) }
  }
}

export default MyOrder