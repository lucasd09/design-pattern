import { Product } from "./products";

export interface BudgetProps {
  itens: Array<Product>;
  value: number;
}

export class Budget {
  private props: BudgetProps;

  constructor(props: BudgetProps) {
    this.props = props;
  }

  get budgetValue() {
    this.recalculateBudget;
    return this.props.value;
  }

  get itens() {
    return this.props.itens;
  }

  set addItem(product: Product) {
    this.props.itens.push(product);
  }

  recalculateBudget() {
    this.itens.forEach((e) => {
      this.props.value += e.value;
    });
  }
}
