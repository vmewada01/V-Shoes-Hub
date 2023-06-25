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
    case types.GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    case types.GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.RATING_LOW_TO_HIGH:{
      return {
        ...state,
       products:  state.products.sort((a,b)=> a.rating-b.rating)
      }
    }
    case types.RATING_HIGH_TO_LOW:{
      return {
        ...state,
       products:  state.products.sort((a,b)=> b.rating-a.rating)
      }
    }
    case types.SORT_HIGH_TO_LOW:{
      return {
        ...state,
       products:  state.products.sort((a,b)=> b.price-a.price)
      }
    }

    case types.SORT_LOW_TO_HIGH:{
      return {
        ...state,
       products:  state.products.sort((a,b)=> a.price-b.price)
      }
    }

    default:
      return state;
  }
};

export {reducer}
