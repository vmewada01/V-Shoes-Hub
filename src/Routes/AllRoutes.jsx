import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Products from '../Products/Products'
import Homepage from '../Homepage/Homepage'

import SingleProduct from '../SingleProduct/SingleProductItem'
import Cart from '../cart/Cart'
import WishList from '../wishList/WishList'
import Checkout from '../checkout/Checkout'
import SignupCard from '../Signup/SignupCard'
import Login from '../Login/Login'
import PrivateRoute from '../PrivateRoutes/PrivateRoute'
import ForgetPassword from '../ForgetPassword/ForgetPassword'

const AllRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/products" element={<Products />} />
      <Route path="/men" element={<Products />} />
      <Route path="/women" element={<Products/>} />
      <Route path="/kids" element={<Products/>} />
      <Route path="/products/:id" element={<SingleProduct/>} />
      <Route path="/cart" element={
        <PrivateRoute>
      <Cart/>
      </PrivateRoute>
      } />
     <Route path="/wishlist" element={
     <PrivateRoute>
     <WishList />
     </PrivateRoute>
     } />
      <Route path="/checkout" element={
      <PrivateRoute>
      <Checkout/>
      </PrivateRoute>
      } />
      <Route path="/signup" element={<SignupCard/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forgetpassword" element={<ForgetPassword/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default AllRoutes