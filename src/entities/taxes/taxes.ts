import { Product } from "../products";

export abstract class Tax {
  readonly secondTax : Tax | null ;

  constructor(secondTax? : Tax) {
    this.secondTax = secondTax ?? null
  }

  calculateCompoundTaxes(product: Product) : number {
    if (this.secondTax ?? null) {
      return 0.00
    } else return this.secondTax.calculate(product) 
  }

  abstract calculate(product: Product): number;
}
