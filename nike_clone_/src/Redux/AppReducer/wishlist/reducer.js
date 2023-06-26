import * as types from './actionType'

const initialState={
    wishlist: [],
}

const reducer=(state= initialState, action)=> {
    const {type,payload}= action 
 
    switch(type){
        case types.ADD_TO_WISHLIST:{
            const isPresent = state.wishlist.find((item)=> {
               return item.id=== payload.id
            }) 
            let newwishlist;
            if(isPresent){
               newwishlist = state.wishlist.map((item)=> {
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
               newwishlist = [...state.wishlist, newPayload];
            }
            return {...state, wishlist: newwishlist}
            
           }
           case types.REMOVE_FROM_WISHLIST: {
            let RemoveItem= state.wishlist.filter((item)=> {
                return (item.id!==payload.id);
            })
           
            return {
                ...state,
                wishlist: RemoveItem
            }
           }

        default: 
        return state;
    }

}

export {reducer}