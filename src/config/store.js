import { createStore } from "redux";

import rootReducer from "./reducers";
import persistedState from "./persistedState";

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("storageProducts", JSON.stringify(store.getState()));
});

export default store;
