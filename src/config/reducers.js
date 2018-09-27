import { combineReducers } from "redux";

import data from "../data/products.json";

const initialReducer = (state = data.products, action) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT":
      return state.concat(action.payload);
    case "REMOVE_PRODUCT":
      const newState = state.slice();
      return newState.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

const testReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({ products: initialReducer, testReducer });

export default rootReducer;
