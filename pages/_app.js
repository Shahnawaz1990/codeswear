import '../styles/globals.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'


export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subtotal, setSubtotal] = useState(0)
  const router = useRouter()
  const [user, setUser] = useState({value:null})
  const [key, setKey] = useState()
  const [progress, setProgress] = useState(0)
  useEffect(() => {
  router.events.on("routeChangeStart",()=>{setProgress(40)})
  router.events.on("routeChangeComplete",()=>{setProgress(100)})
  console.log("I am useeffect inside _app")
  console.log(cart);
  try {
    if (localStorage.getItem("cart")){
      setCart(JSON.parse(localStorage.getItem("cart")))
      saveCart(JSON.parse(localStorage.getItem("cart")))
    }  
  } catch (error) {
    console.error(error)
    localStorage.clear()
  }

  const token = localStorage.getItem('token')
  if(token){
    setUser({value: token})
  }
  setKey(Math.random)
}, [router.query])



const addToCart = (itemCode, qty, price, name, size, variant) => {
let myCart = cart
if (itemCode in myCart){
  myCart[itemCode].qty = cart[itemCode].qty + qty
} else {
  myCart[itemCode] = {qty:1, price, name, size, variant}
}
  setCart(myCart)
  saveCart(myCart)
}

const removeFromCart = (itemCode, qty, price, name, size, variant) => {
let myCart = JSON.parse(JSON.stringify(cart)) 
if (itemCode in myCart){
  myCart[itemCode].qty = cart[itemCode].qty - qty
} 
if(myCart[itemCode]["qty"] <= 0){
  delete myCart[itemCode]
}
  setCart(myCart)
  saveCart(myCart)

}

const buyNow = (itemCode, qty, price, name, size, variant) => {
  let newCart = {}
  newCart[itemCode] = {qty: 1, price, name, size, variant}
  setCart(newCart)
  saveCart(newCart)
  console.log(newCart);
  router.push('/checkout')

}

const saveCart = (cartItem) => {
  localStorage.setItem("cart", JSON.stringify(cartItem))
  let subt = 0
  let keys = Object.keys(cartItem)
  for (let i = 0; i < keys.length; i++) {
    subt += cartItem[keys[i]].price * cartItem[keys[i]].qty
  }

  setSubtotal(JSON.stringify(subt))
}

const clearCart = (cartItem) => {
  setCart({})
  saveCart({})
}

const logout = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("email")
  setUser({value:null})
  setKey(Math.random)
  setTimeout(() => {
    toast.success('Your Account has been logged out', {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }, 500);
  router.push('/')
}

// const objectTest = (arga, argb, argc) => {
//   let tryObject = {keya: arga, keyb: argb, keyc: argc}
//   return tryObject
// }
  
// {console.log(objectTest("valuea", "valueb", "valuec"))}



  return(
      <>
      <LoadingBar
        color='#ff2d55'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      {key && <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} saveCart={saveCart} clearCart={clearCart} subtotal={subtotal} />}
      <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} saveCart={saveCart} clearCart={clearCart} subtotal={subtotal} {...pageProps} />
      <Footer />
      </>
      )
}