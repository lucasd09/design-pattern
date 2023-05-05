import { test, expect } from "vitest";
import { Product } from "./products";

test("create a product", () => {
  const product = new Product({
    name: "Chocolate",
    value: 6.5,
    qtd: 1,
  });

  expect(product).toBeInstanceOf(Product);
  expect(product.name).toEqual("Chocolate");
});
