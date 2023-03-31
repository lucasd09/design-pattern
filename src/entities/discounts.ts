import { Product } from "./products";

interface DiscountProps {
  promotion: string;
  qtd: number;
  discount: number;
}

export class Discount {
  private props: DiscountProps;

  constructor(props: DiscountProps) {
    this.props = props;
  }

  verifyByProduct(product: Product): Boolean {
    if (this.props.promotion === product.name) {
      product.value -= (product.value * this.props.discount) / 100;
      return true;
    } else {
      return false;
    }
  }

  verifyByQuantity(product: Product) {
    if (product.qtd >= this.props.qtd) {
      product.value -= (product.value * this.props.discount) / 100;
      return true;
    } else {
      return false;
    }
  }
}
