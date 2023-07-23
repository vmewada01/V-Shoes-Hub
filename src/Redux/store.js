import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from "redux";
  import thunk from "redux-thunk";

 import {reducer as AppReducer} from "./AppReducer/Products/reducer"
 import {reducer as AuthReducer} from "./AuthReducer/reducer"
 import {reducer as singleProduct} from "./AppReducer/singleProduct/reducer"
import { reducer as cart_reducer} from "./AppReducer/Cart/reducer"
import {reducer as wish_list} from "./AppReducer/wishlist/reducer"

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const rootReducer = combineReducers({ AppReducer, AuthReducer, singleProduct , cart_reducer,wish_list });
  
  const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  
  export default store;
  