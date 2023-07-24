import axios from "axios";
import * as types from "./actionType";

const API_URL= process.env.REACT_APP_PRODUCT_URL

const getSingleData = (id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLE_PRODUCT_REQUEST });
  return axios
    .get(`${API_URL}/${id}`)
    .then((res) => {
      const payload = res.data;
      dispatch({ type: types.GET_SINGLE_PRODUCT_SUCCESS, payload });
    })
    .catch((err) => {
      dispatch({ type: types.GET_SINGLE_PRODUCT_FAILURE });
    });
};

export { getSingleData };
