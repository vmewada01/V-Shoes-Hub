import { getLocalData, saveLocalData } from "../Utils/localStorage";
import * as types from "./actionType";


const initialState = {
  isloading: false,
  isError: false,
  profileData: [],
  isAuth: getLocalData("token") ? true : false,
  token: getLocalData("token") || "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LOGIN_REQUEST: {
      return {
        ...state,
        isloading: true,
      }
    }
    case types.GET_LOGIN_SUCCESS:{
        saveLocalData("token", payload)
        return {
            ...state,
            isloading: false,
            isAuth: true,
            token: payload
        }
    }
    case types.GET_LOGIN_FAILURE: {
        return{
            ...state,
            isloading: false,
           isError: true,
           isAuth: false,
           token: ""
        }
    }
    default: 
    return state;
  }
};

export {reducer}
