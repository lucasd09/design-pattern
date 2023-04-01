import { Product } from "../products";
import { Tax } from "./taxes";

export abstract class CondicionalTax extends Tax {
  calculate(product: Product): number {
    if (this.useMaxTax(product)) {
      return this.maximumTax(product);
    } else return this.minimumTax(product);
  }

  public abstract useMaxTax(product: Product): boolean;
  public abstract maximumTax(product: Product): number;
  public abstract minimumTax(product: Product): number;
}
