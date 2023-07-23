

import * as types from "./actionType";

const initial ={
    cart: [],
};

 const reducer =(state= initial, action)=> {
    const {type,payload} = action 
    
    switch(type){
        case types.ADD_TO_CART:{
         const isPresent = state.cart.find((item)=> {
            return item.id=== payload.id
         }) 
         let newCart;
         if(isPresent){
            newCart = state.cart.map((item)=> {
                 if(item.id=== payload.id){
                    return { 
                        ...item,
                        qty: item.qty + 1
                    }
                   
                 }
                 else {
                    return item
                }
            })
         }
         else{
            let newPayload={
                ...payload,
                qty: 1,
            }
            newCart = [...state.cart, newPayload];
         }
         return {...state, cart: newCart}
         
        }
      case types.INCREASE_QUANTITY: {
        let newChangeCart = state.cart.map((item)=> {
             if(item.id===payload.id){
                return {
                    ...item,
                    qty : item.qty+1
                }
             }
             else {
                return item;
             }
        })
        return {
            ...state,
            cart: newChangeCart
        }
      }
      case types.DECREASE_QUANTITY: {
        let newChangeCart = state.cart.map((item)=> {
             if(item.id===payload.id){
                return {
                    ...item,
                    qty : item.qty - 1
                }
             }
             else {
                return item;
             }
        })
        return {
            ...state,
            cart: newChangeCart
        }
      }
     
       case types.REMOVE_QUANTITY: {
        let RemoveItem= state.cart.filter((item)=> {
            return (item.id!==payload.id);
        })
        console.log("hi")
        console.log(RemoveItem)
        return {
            ...state,
            cart: RemoveItem
        }
       }
       case types.CLEAR_QUANTITY: {
         return {
            ...state,
            cart: (state.cart=[])
         }
       }

        default: 
        return state
    }

 }

 export {reducer}