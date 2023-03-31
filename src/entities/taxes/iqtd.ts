import { Product } from "../products";
import { Tax } from "./taxes";

export interface IQTDProps {
  perc: number;
  limit: number;
}

export class IQTD extends Tax {
  private props: IQTDProps;

  constructor(props: IQTDProps) {
    super();
    this.props = props;
  }

  calculate(product: Product): number {
    if (product.qtd > this.props.limit) {
      return product.value + (product.value * this.props.perc) / 100;
    } else {
      return product.value;
    }
  }
}
