import * as types from "./actionType"

const addToWishList=(payload)=> {
     return ({type: types.ADD_TO_WISHLIST, payload})
}

const removeFromWishlist= (payload) => {
     return ({type: types.REMOVE_FROM_WISHLIST, payload})
}

export {addToWishList,removeFromWishlist}