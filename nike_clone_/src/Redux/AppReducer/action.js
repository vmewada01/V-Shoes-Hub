import axios from "axios"
import * as types from "./actionType" 

 
const getData= ()=> (dispatch)=> {
     dispatch({type: types.GET_DATA_REQUEST})
 
    return axios.get("http://localhost:8080/products").then((res)=> {
  
        const payload= res.data
        dispatch({type: types.GET_DATA_SUCCESS,payload})
    }).catch((err)=> {
        dispatch({type: types.GET_DATA_FAILURE})
    })
}


export {getData}


