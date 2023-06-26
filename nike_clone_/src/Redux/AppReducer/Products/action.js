import axios from "axios"
import * as types from "./actionType" 

 
const getData= (q)=> (dispatch)=> {
     dispatch({type: types.GET_DATA_REQUEST})
 
    return axios.get(`https://v-mock-server-api.onrender.com/products`,q).then((res)=> {
  
        const payload= res.data
        dispatch({type: types.GET_DATA_SUCCESS,payload})
    }).catch((err)=> {
        dispatch({type: types.GET_DATA_FAILURE})
    })
}

const getfilterData= (q)=> (dispatch)=> {
    dispatch({type: types.GET_DATA_REQUEST})
     console.log(q)
   return axios.get(`https://v-mock-server-api.onrender.com/products`,q).then((res)=> {
 
       const payload= res.data
       console.log(payload)
       dispatch({type: types.GET_DATA_SUCCESS,payload})
   }).catch((err)=> {
       dispatch({type: types.GET_DATA_FAILURE})
   })
}






export {getData, getfilterData}


