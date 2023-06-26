import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Products from '../Products/Products'
import Homepage from '../Homepage/Homepage'

import SingleProduct from '../SingleProduct/SingleProductItem'
import Cart from '../cart/Cart'

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
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default AllRoutes