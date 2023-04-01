import { Product } from "../products";
import { CondicionalTax } from "./condicionalTaxes";

export class ICTX extends CondicionalTax {
  public useMaxTax(product: Product): boolean {
    return product.qtd > 10;
  }
  public maximumTax(product: Product): number {
    return product.value * 0.1;
  }
  public minimumTax(product: Product): number {
    return product.value * 0.05;
  }
}
