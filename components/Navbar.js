import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { MdAccountCircle } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';


const Navbar = ({ logout, user, cart, addToCart, removeFromCart, saveCart, clearCart, subtotal }) => {
  console.log(cart)
  const router = useRouter()
  // console.log(router.pathname)

  let exempted = ['/order', '/orders', '/myaccount', '/checkout']

  const toggleCart = () => {
    if (exempted.includes(router.pathname)) {
      return
    }


    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    } else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }


  }
  const [disabled, setDisabled] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const ref = useRef()
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10'>
      <div className='logo md:mx-5 mr-auto'>
        <Link href={'/'}><Image src={'/logo.png'} width={200} height={40} alt='' /></Link>
      </div>
      <div className='nav'>
        <ul className='flex items-center space-x-4 font-bold md:text-md'>
          <Link href={'/tshirts'} className='hover:text-pink-800'><li>Tshirts</li></Link>
          <Link href={'/hoodies'} className='hover:text-pink-800'><li>Hoodies</li></Link>
          <Link href={'/stickers'} className='hover:text-pink-800'><li>Stickers</li></Link>
          <Link href={'/mugs'} className='hover:text-pink-800'><li>Mugs</li></Link>
        </ul>
      </div>
      <div className='cursor-pointer items-center cart absolute right-0 top-4 mx-5 flex'>
        {user.value && <Link href={'/login'}><MdAccountCircle onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className='text-xl md:text-2xl mx-2' /></Link>}
        {/* {console.log(user.value)} */}
        <a ></a>
        {dropdown && <div onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className='absolute right-8 bg-white border shadow-lg top-6 py-4 rounded-md px-5 w-32'>
          <ul>
            {/* {console.log(localStorage.getItem("userid"))} */}
            <Link href={`/myaccount?id=${localStorage.getItem("userid")}`} ><li className='py-1 hover:text-pink-700 text-sm font-bold'>My Account</li></Link>
            <Link href={'/orders'} ><li className='py-1 hover:text-pink-700 text-sm font-bold'>Orders</li></Link>
            <li onClick={logout} className='py-1 hover:text-pink-700 text-sm font-bold'>Log Out</li>

          </ul>
        </div>}

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
        {!user.value && <Link href={'/login'}><button className='bg-pink-600 px-2 py-1 rounded-md text-sm text-white'>Login</button></Link>}
        <AiOutlineShoppingCart onClick={toggleCart} className='text-xl md:text-2xl' />
      </div>
      {/* class "absolute" will not work in mobile so changed with "fixed" */}
      <div ref={ref} className={`w-72 h-[100vh] overflow-y-scroll sideCart fixed top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform ${Object.keys(cart).length !== 0 && !exempted.includes(router.pathname) ? 'translate-x-0' : 'translate-x-full'}`}>
        <h2 className='font-bold text-ml'>Shopping Cart</h2>
        <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-500'><AiFillCloseCircle /></span>
        {Object.keys(cart).length == 0 && <div className='my-4 font-semibold'>Your Cart is Empty</div>}

        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                {/* {console.log(k)} */}
                <div className='item flex my-5'>
                  <div className='w-2/3 font-semibold text-lg'>{cart[k].name}({cart[k].size})/({cart[k].variant})</div>
                  <div className='flex font-semibold items-center justify-center w-1/3 text-lg'>
                    <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, 499, cart[k].price, cart[k].size, cart[k].variant) }} className='cursor-pointer text-pink-500' /><span className='mx-2'>{cart[k].qty}</span><AiFillPlusCircle onClick={() => { addToCart(k, 1, 499, cart[k].price, cart[k].size, cart[k].variant) }} className='cursor-pointer text-pink-500' />
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
        <div>Subtotal: {subtotal}</div>
        <div className='flex'>

          <Link href={'/checkout'}><button disabled={Object.keys(cart).length === 0} className="disabled:bg-pink-300 flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1' />Checkout</button></Link>
          <button disabled={Object.keys(cart).length === 0} onClick={clearCart} className="disabled:bg-pink-300 flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear Cart</button>
        </div>
      </div>
    </div>

  )
}

export default Navbar