import { expect, test } from "vitest";
import { Budget } from "./budgets";
import { Product } from "./products";

test("create a budget", () => {
  const budget = new Budget({
    itens: [],
    value: 0,
  });

  expect(budget).toBeInstanceOf(Budget);
  expect(budget.budgetValue).toEqual(0);
});

test("Add a product to a budget", () => {
  const budget = new Budget({
    itens: [],
    value: 0,
  });

  const product = new Product({
    name: "Chocolate",
    value: 6.5,
    qtd: 1,
  });

  expect(() => {
    budget.addItem = product;
  });
});
