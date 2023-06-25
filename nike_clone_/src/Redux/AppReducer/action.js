import axios from "axios"
import * as types from "./actionType" 

 
// const getData= ()=> (dispatch)=> {
//      dispatch({type: types.GET_DATA_REQUEST})
 
//     return axios.get("https://v-mock-server-api.onrender.com/products").then((res)=> {
  
//         const payload= res.data
//         dispatch({type: types.GET_DATA_SUCCESS,payload})
//     }).catch((err)=> {
//         dispatch({type: types.GET_DATA_FAILURE})
//     })
// }

const getfilterData= (page)=> (dispatch)=> {
    dispatch({type: types.GET_DATA_REQUEST})

   return axios.get(`https://v-mock-server-api.onrender.com/products?_page=${page}&_limit=6`).then((res)=> {
 
       const payload= res.data
       dispatch({type: types.GET_DATA_SUCCESS,payload})
   }).catch((err)=> {
       dispatch({type: types.GET_DATA_FAILURE})
   })
}

export const sortHighToLow= ()=> ({type: types.SORT_HIGH_TO_LOW})

export const sortLowToHigh= ()=> ({type: types.SORT_LOW_TO_HIGH})




export { getfilterData}


