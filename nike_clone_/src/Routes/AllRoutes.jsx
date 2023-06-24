import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Homepage from '../pages/Homepage'
import Products from '../pages/Products'

const AllRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/products" element={<Products />} />
    </Routes>
    <Footer />
    </>
  )
}

export default AllRoutes