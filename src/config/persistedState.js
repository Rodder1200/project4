import data from "../data/products.json";

const persistedState = localStorage.getItem("storageProducts")
  ? JSON.parse(localStorage.getItem("storageProducts"))
  : localStorage.setItem("storageProducts", JSON.stringify(data));

export default persistedState;
