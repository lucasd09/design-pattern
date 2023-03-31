export interface ProductProps {
  name: String;
  value: number;
  qtd: number;
}

export class Product {
  private props: ProductProps;

  constructor(props: ProductProps) {
    this.props = props;
  }

  get name() {
    return this.props.name;
  }

  get value() {
    return this.props.value;
  }

  set value(value: number) {
    this.props.value = value;
  }

  get qtd() {
    return this.props.qtd;
  }
}
