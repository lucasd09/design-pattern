import { expect, test } from "vitest";
import { Budget, BudgetStatus } from "./budgets";
import { Product } from "./products";

test("create a budget", () => {
  const budget = new Budget({
    itens: [],
    value: 0,
    status: BudgetStatus.Pending,
  });

  expect(budget).toBeInstanceOf(Budget);
  expect(budget.budgetValue).toEqual(0);
});

test("Add a product to a Pending budget", () => {
  const budget = new Budget({
    itens: [],
    value: 0,
    status: BudgetStatus.Pending,
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

test("Cannot add itens in a approved or rejected Budget", () => {
  const budget = new Budget({
    itens: [],
    value: 0,
    status: BudgetStatus.Approved,
  });

  const product = new Product({
    name: "Chocolate",
    value: 6.5,
    qtd: 1,
  });

  expect(() => {
    budget.addItem = product;
  }).toThrow;
});

test("Status change of a budget", () => {
  const budget = new Budget({
    itens: [],
    value: 0,
    status: BudgetStatus.Pending,
  });

  const product = new Product({
    name: "Chocolate",
    value: 6.5,
    qtd: 1,
  });

  budget.addItem = product;

  budget.status = BudgetStatus.Approved;

  expect(budget.status).toEqual(BudgetStatus.Approved);
});

test("Cannot change status of a close budget", () => {
  const budget = new Budget({
    itens: [],
    value: 0,
    status: BudgetStatus.Closed,
  });

  expect(() => {
    budget.status = BudgetStatus.Pending;
  }).toThrow;
});
