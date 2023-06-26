import React from 'react'
import { useSelector } from 'react-redux'

const WishList = () => {
 const data = useSelector((store)=> store.wishlist.wishlist)
 
 console.log(data)

  return (
    <div>WishList</div>
  )
}

export default WishList