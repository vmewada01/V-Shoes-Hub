import { getLocalData, saveLocalData,removeData } from "../Utils/localStorage";
import * as types from "./actionType";

const initialState = {
  isloading: false,
  isError: false,
  profileData: [],
  isRegister: false,
  isForget: false,
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
      };
    }
    case types.GET_LOGIN_SUCCESS: {
      saveLocalData("token", payload);

      return {
        ...state,
        isAuth: true,
        isloading: false,
        token: payload,
        isError: false,
      };
    }
    case types.GET_LOGIN_FAILURE: {
      return {
        ...state,
        isloading: false,
        isError: true,
        isAuth: false,
        token: "",
      };
    }

    case types.GET_REGISTER_REQUEST: {
      return {
        ...state,
        isloading: true,
      };
    }
    case types.GET_REGISTER_SUCCESS: {
      return {
        ...state,
        isRegister: true,
        isloading: false,

        isError: false,
      };
    }
    case types.GET_REGISTER_FAILURE: {
      return {
        ...state,
        isloading: false,
        isError: true,
      };
    }

    case types.FORGET_PASSWORD_REQUEST: {
      return {
        ...state,
        isloading: true,
      };
    }
    case types.FORGET_PASSWORD_SUCCESS: {
      return {
        ...state,
        isloading: false,
        isError: false,
        isForget: true,
      };
    }
    case types.FORGET_PASSWORD_FAILURE: {
      return {
        ...state,
        isloading: false,
        isError: true,
       
      };
    }

    case types.LOGOUT: {
    
      removeData("token");
      removeData("isAuth")
      return {
        ...state,
        isAuth: false,
        token: "",
      };
    }

    default:
      return state;
  }
};

export { reducer };
