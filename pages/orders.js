import React, { useEffect, useState } from 'react'
import mongoose from 'mongoose'
import Order from '../models/Order'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Orders = () => {
  const router = useRouter()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorder`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: localStorage.getItem("token") })
      })
      let res = await response.json()
      setOrders(res.orders)
      console.log(res);

    }

    if (!localStorage.getItem('token')) {
      router.push('/')
    } else {
      fetchOrders()
    }

  }, [])

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#Order ID</th>
                  
                  <th scope="col" className="px-6 py-4">Amount</th>
                  <th scope="col" className="px-6 py-4">Detail</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item) => {return(
                  <tr key={item._id}
                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{item.orderId}</td>
                    
                    <td className="whitespace-nowrap px-6 py-4">{item.amount}</td>
                    <td className="whitespace-nowrap px-6 py-4"><Link href={'/order?id='+item._id}>Details</Link></td>
                  </tr>
                )})}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
// export const getServerSideProps = async (context) => {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI)
//   }
//   let orders = await Order.find({ })

//   return {
//     props: { orders: JSON.parse(JSON.stringify(orders)) }
//   }
// }
export default Orders