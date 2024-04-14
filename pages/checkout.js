import React, { useState } from 'react'
import Link from 'next/link'
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const Checkout = ({ buyNow, cart, addToCart, removeFromCart, saveCart, clearCart, subtotal }) => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [pincode, setPincode] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [disabled, setDisabled] = useState(true)

  const handleChange = async (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    } else if (e.target.name == 'email') {
      setEmail(e.target.value)
    } else if (e.target.name == 'address') {
      setAddress(e.target.value)
    } else if (e.target.name == 'phone') {
      setPhone(e.target.value)
    } else if (e.target.name == 'pincode') {
      setPincode(e.target.value)
      if (e.target.value.length == 6) {
        let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
        let pinJson = await pins.json()
        if (Object.keys(pinJson).includes(e.target.value)) {
          setState(pinJson[e.target.value][1])
          setCity(pinJson[e.target.value][0])
        } else {
          setState('')
          setCity('')
          toast.error("Pincode Not Servicable", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        setState('')
        setCity('')
      }
    }
    if (name.length > 3 && email.length >= 0 && address.length > 3 && phone.length > 3 && pincode.length > 3 && city.length > 3) {
      setDisabled(false)
    } else { setDisabled(true) }
  }
  console.log(name.length, email.length, address.length, phone.length, pincode.length, city.length, disabled)

  const initiatePayment = async (e) => {
    if (Object.keys(cart).length == 0) {
      toast.error('Your Cart is Empty', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return
    }
    let oid = Math.floor(Math.random() * Date.now())
    let data = { cart, subtotal, oid, name, address, phone, email: email, pincode }
    console.log(data);
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response);
    if (response.success) {
      toast.success('Order Added', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push(`${process.env.NEXT_PUBLIC_HOST}/`)
        clearCart()
      }, 3000);
    }
    else {
      // console.log(res.error);
      toast.error(response.error, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  return (
    <div className='container px-8 sm:m-auto'>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
      <h2 className='font-semibold text-xl'>1 . Delivery Details</h2>
      <div className='mx-auto flex my-4'>
        <div className='px-2 w-1/2'>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className='px-2 w-1/2'>
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input onChange={handleChange} value={localStorage.getItem("email")} type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <div className='px-2 w-full'>
        <div className="mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea onChange={handleChange} value={address} name='address' cols="30" rows="2" id="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
        </div>
      </div>
      <div className='mx-auto flex my-4'>
        <div className='px-2 w-1/2'>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Phone</label>
            <input onChange={handleChange} value={phone} type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className='px-2 w-1/2'>
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Pincode</label>
            <input onChange={handleChange} value={pincode} type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className='mx-auto flex my-4'>
        <div className='px-2 w-1/2'>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">State</label>
            <input onChange={handleChange} value={state} type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} />
          </div>
        </div>

        <div className='px-2 w-1/2'>
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">City</label>
            <input onChange={handleChange} value={city} type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} />
          </div>
        </div>
      </div>
      <h2 className='font-semibold text-xl'>2 . Review Cart Items & Pay</h2>
      <h2 className='font-bold text-ml text-center'>Shopping Cart</h2>
      <div className='sidecart bg-pink-100 p-6 m-2'>
        {Object.keys(cart).length == 0 && <div className='my-4 font-semibold'>Your Cart is Empty</div>}
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                {/* {console.log(cart[k].qty)} */}
                <div className='item flex my-5'>
                  <div className='font-semibold'>{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
                  <div className='flex font-semibold items-center justify-center w-1/3 text-lg'>
                    <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, 499, cart[k].price, cart[k].size, cart[k].variant) }} className='cursor-pointer text-pink-500' /><span className='mx-2'>{cart[k].qty}</span><AiFillPlusCircle onClick={() => { addToCart(k, 1, 499, cart[k].price, cart[k].size, cart[k].variant) }} className='cursor-pointer text-pink-500' />
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
        <span className='font-bold'>Subtotal: {subtotal}</span>
      </div>
      <div className='mx-4'>
        <Link href={'/checkout'}><button disabled={disabled} onClick={initiatePayment} className="disabled:bg-pink-300 flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1' />PayOut: {subtotal}</button></Link>

      </div>
    </div>
  )
}

export default Checkout