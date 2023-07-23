import * as types from "./actionType";

const initialState = {
  products: [],
  singleproducts: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_SINGLE_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_SINGLE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    case types.GET_SINGLE_PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
  

    default:
      return state;
  }
};

export {reducer}
