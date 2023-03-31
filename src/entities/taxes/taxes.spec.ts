import { expect, test } from "vitest";
import { ICMS } from "./icms";
import { IVLR } from "./ivlr";
import { IQTD } from "./iqtd";
import { Product } from "../products";
import { CompoundTax } from "./compoundTaxes";

test("create Taxes", () => {
  const icms = new ICMS({
    perc: 5,
    taxedProduct: "Chocolate",
  });

  const ivlr = new IVLR({
    perc: 3,
    limit: 6,
  });

  const iqtd = new IQTD({
    perc: 4,
    limit: 5,
  });

  expect(icms).toBeInstanceOf(ICMS);
  expect(ivlr).toBeInstanceOf(IVLR);
  expect(iqtd).toBeInstanceOf(IQTD);
});

test("ICMS should only add value to the matching product", () => {
  const icms = new ICMS({
    perc: 5,
    taxedProduct: "Chocolate",
  });

  const chocolate = new Product({
    name: "Chocolate",
    value: 6.5,
    qtd: 1,
  });

  const banana = new Product({
    name: "Banana",
    value: 3,
    qtd: 1,
  });

  banana.value = icms.calculate(banana);
  chocolate.value = icms.calculate(chocolate);

  expect(banana.value).toEqual(3);
  expect(chocolate.value).toEqual(6.825);
});

test("IQTD should only add value over the limit", () => {
  const iqtd = new IQTD({
    perc: 4,
    limit: 5,
  });

  const chocolate = new Product({
    name: "Chocolate",
    value: 6,
    qtd: 6,
  });

  const banana = new Product({
    name: "Banana",
    value: 3,
    qtd: 5,
  });

  banana.value = iqtd.calculate(banana);
  chocolate.value = iqtd.calculate(chocolate);

  expect(banana.value).toEqual(3);
  expect(chocolate.value).toEqual(6.24);
});

test("IVLR should only add value over the limit", () => {
  const ivlr = new IVLR({
    perc: 3,
    limit: 5,
  });

  const chocolate = new Product({
    name: "Chocolate",
    value: 6,
    qtd: 1,
  });

  const banana = new Product({
    name: "Banana",
    value: 3,
    qtd: 1,
  });

  banana.value = ivlr.calculate(banana);
  chocolate.value = ivlr.calculate(chocolate);

  expect(banana.value).toEqual(3);
  expect(chocolate.value).toEqual(6.18);
});

test("compound taxes should be applied if condition is true", () => {
  const chocolate = new Product({
    name: "Chocolate",
    value: 6,
    qtd: 6,
  });

  const iqtd = new IQTD({
    perc: 4,
    limit: 5,
  });

  const icms = new ICMS({
    perc: 5,
    taxedProduct: "Chocolate",
  });

  const compoundTax = new CompoundTax(icms, iqtd);

  chocolate.value = compoundTax.calculate(chocolate);

  expect(chocolate.value).toEqual(6.552);
});
