import { expect, test } from "vitest";
import { NotaFiscalBuilder } from "./notaFiscalBuilder";
import { Budget } from "../budgets";
import { Pending } from "../status/pending";
import { Product } from "../products";
import { NotaFiscal } from "./NotaFiscal";

test("Build Nota Fiscal", () => {
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

  const NF = new NotaFiscalBuilder()
    .budget(budget)
    .withRazaoSocial("Minha Empresa LTDA")
    .withCnpj("00.000.000/0000-00")
    .withDtEmissao(new Date())
    .withOBS("Observação")
    .build();

  expect(NF).toBeInstanceOf(NotaFiscal);
});
