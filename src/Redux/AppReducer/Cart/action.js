
import * as types from "./actionType"

const addToCart =(payload)=> {
return ({type: types.ADD_TO_CART, payload})
}

const increaseQuantity= (payload)=> {
    console.log(payload)
    return ({type: types.INCREASE_QUANTITY, payload})
}

const decreaseQuantity = (payload)=> {
    return ({type: types.DECREASE_QUANTITY, payload})
}

const removeQuantity =(payload)=> {
     return ({type: types.REMOVE_QUANTITY, payload})
}

const clearQuantity= (payload)=> {
    return ({type: types.CLEAR_QUANTITY, payload})
}


export {addToCart, increaseQuantity,decreaseQuantity,clearQuantity,removeQuantity}