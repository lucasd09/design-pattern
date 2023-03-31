import { expect, test } from "vitest";
import { Budget } from "./budgets";
import { Product } from "./products";
import { Approved } from "./status/approved";
import { Closed } from "./status/closed";
import { Pending } from "./status/pending";

test("create a budget", () => {
  const budget = new Budget({
    itens: [],
    value: 0,
    state: new Pending(),
  });

  expect(budget).toBeInstanceOf(Budget);
  expect(budget.budgetValue).toEqual(0);
});

test("Add a product to a Pending budget", () => {
  const budget = new Budget({
    itens: [],
    value: 0,
    state: new Pending,
  });

  const product = new Product({
    name: "Chocolate",
    value: 6.5,
    qtd: 1,
  });

  expect(() => {
    budget.addItem(product);
  });
});

test("Cannot add itens in a approved or rejected Budget", () => {
  const budget = new Budget({
    itens: [],
    value: 0,
    state: new Approved(),
  });

  const product = new Product({
    name: "Chocolate",
    value: 6.5,
    qtd: 1,
  });

  expect(() => {
    budget.addItem(product);
  }).toThrow;
});

test("Status change of a budget", () => {
  const budget = new Budget({
    itens: [],
    value: 0,
    state: new Pending(),
  });

  const product = new Product({
    name: "Chocolate",
    value: 6.5,
    qtd: 1,
  });

  budget.addItem(product);

  budget.state = new Approved();

  expect(budget.state).toBeInstanceOf(Approved);
});

test("Cannot change status of a close budget", () => {
  const budget = new Budget({
    itens: [],
    value: 0,
    state: new Closed(),
  });

  expect(() => {
    budget.state.Approve;
  }).toThrow;
});
