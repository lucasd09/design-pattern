import { Product } from "../products";
import { Tax } from "./taxes";

export class CompoundTax implements Tax {
  private taxes: Tax[];

  constructor(...taxes: Tax[]) {
    this.taxes = taxes;
  }

  calculate(product: Product): number {
    for (const tax of this.taxes) {
      product.value = tax.calculate(product);
    }
    return product.value;
  }
}
