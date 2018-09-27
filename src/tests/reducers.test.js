import rootReducer from "../config/reducers";

test("rootReducer", () => {
  expect(typeof rootReducer).toBe("function");
});
