import { expect, test } from "vitest";
import { Discount } from "./discounts";
import { Budget, BudgetStatus } from "./budgets";
import { Product } from "./products";

test("Create a discount", () => {
  const discount = new Discount({
    discount: 10,
    promotion: "Banana",
    qtd: 5,
  });

  expect(discount).toBeInstanceOf(Discount);
});

test("Add a discount to a product", () => {
  const discount = new Discount({
    discount: 10,
    promotion: "Banana",
    qtd: 5,
  });

  const budget = new Budget({
    itens: [],
    value: 0,
    status: BudgetStatus.Pending,
  });

  const product = new Product({
    name: "Chocolate",
    value: 10,
    qtd: 6,
  });

  budget.addItem = product;

  expect(discount.verifyByQuantity(budget.itens[0])).toEqual(true);
  expect(discount.verifyByProduct(budget.itens[0])).toEqual(false);
});
