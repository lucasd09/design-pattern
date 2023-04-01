import { Product } from "../products";
import { Tax } from "./taxes";

export interface ICMSProps {
  perc: number;
  taxedProduct: string;
}

export class ICMS extends Tax {
  private props: ICMSProps;

  constructor(props: ICMSProps, secondTax?: Tax) {
    super();
    this.props = props;
  }

  calculate(product: Product): number {
    if (product.name == this.props.taxedProduct) {
      return product.value + (product.value * this.props.perc) / 100;
    } else {
      return product.value;
    }
  }
}
