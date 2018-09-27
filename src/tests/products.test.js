import products from "../data/products";

test("products", () => {
  expect(typeof products).toBe("object");
});

test("products_contain", () => {
  expect(products).toHaveProperty("products");
});
