import axios from "axios"
import * as types from "./actionType" 

const API_URL= process.env.REACT_APP_PRODUCT_URL
 
const getData= (q)=> (dispatch)=> {
     dispatch({type: types.GET_DATA_REQUEST})
 
    return axios.get(`${API_URL}`,q).then((res)=> {
  
        const payload= res.data
        dispatch({type: types.GET_DATA_SUCCESS,payload})
    }).catch((err)=> {
        dispatch({type: types.GET_DATA_FAILURE})
    })
}

const getfilterData= (q)=> (dispatch)=> {
    dispatch({type: types.GET_DATA_REQUEST})
     console.log(q)
   return axios.get(`${API_URL}`,q).then((res)=> {
 
       const payload= res.data
       console.log(payload)
       dispatch({type: types.GET_DATA_SUCCESS,payload})
   }).catch((err)=> {
       dispatch({type: types.GET_DATA_FAILURE})
   })
}






export {getData, getfilterData}


