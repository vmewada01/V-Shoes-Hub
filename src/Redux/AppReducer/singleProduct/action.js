import axios from "axios";
import * as types from "./actionType";

const getSingleData = (id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLE_PRODUCT_REQUEST });
  return axios
    .get(`https://v-mock-server-api.onrender.com/products/${id}`)
    .then((res) => {
      const payload = res.data;
      dispatch({ type: types.GET_SINGLE_PRODUCT_SUCCESS, payload });
    })
    .catch((err) => {
      dispatch({ type: types.GET_SINGLE_PRODUCT_FAILURE });
    });
};

export { getSingleData };
