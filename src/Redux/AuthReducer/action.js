import axios from "axios"
import * as types from "./actionType"

const URL= process.env.REACT_APP_AUTH_URL

const getLogin=(payload)=>(dispatch)=> {
     dispatch({type: types.GET_LOGIN_REQUEST})
    
     return axios.post(`${URL}/auth/login`, payload).then((res)=> {
    
        dispatch({type: types.GET_LOGIN_SUCCESS,payload: res.data.token })
        return { status: types.GET_LOGIN_SUCCESS, message: res.data.message };
      }).catch((err)=> {
        dispatch({type: types.GET_LOGIN_FAILURE, payload: err})
        return {
         status: types.GET_LOGIN_FAILURE,
         message: err.response.data.message,
       }
      })
}

const getRegister=(payload)=>(dispatch)=> {
    console.log(payload)
   dispatch({type: types.GET_REGISTER_REQUEST})
  
   return axios.post(`${URL}/auth/register`, payload).then((res)=> {
  
      dispatch({type: types.GET_REGISTER_SUCCESS,payload: res.data.message })
      return {status: types.GET_REGISTER_SUCCESS, message: res.data.message}
   }).catch((err)=> {
      dispatch({type: types.GET_REGISTER_FAILURE, payload: err})
      return{status: types.GET_REGISTER_FAILURE, message: err.response.data.message }
   })
}

const forgetPassword=(payload)=>(dispatch)=> {
   dispatch({type: types.FORGET_PASSWORD_REQUEST})
  
   return axios.patch(`${URL}/auth/forgetPassword`, payload).then((res)=> {
  
      dispatch({type: types.FORGET_PASSWORD_SUCCESS,payload: res.data.message })
      return { status: types.FORGET_PASSWORD_SUCCESS, message: res.data.message };
   }).catch((err)=> {
      dispatch({type: types.FORGET_PASSWORD_FAILURE, payload: err})
      return {
         status: types.FORGET_PASSWORD_FAILURE,
         message: err.response.data.message,
       };
   
   })
}

 const logout = () => (dispatch) => {
   dispatch({ type: types.LOGOUT });
 };


export {getLogin,forgetPassword,getRegister,logout}