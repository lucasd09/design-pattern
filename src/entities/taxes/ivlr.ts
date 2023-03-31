import { Product } from "../products";
import { Tax } from "./taxes";

export interface IVLRProps {
  perc: number;
  limit: number;
}

export class IVLR extends Tax {
  private props: IVLRProps;

  constructor(props: IVLRProps) {
    super();
    this.props = props;
  }

  calculate(product: Product): number {
    if (product.value > this.props.limit) {
      return product.value + (product.value * this.props.perc) / 100;
    } else {
      return product.value;
    }
  }
}
