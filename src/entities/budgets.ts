import { Product } from "./products";
import { BudgetState } from "./status/stateInterface";

export interface BudgetProps {
  itens: Array<Product>;
  value: number;
  state: BudgetState;
}

export class Budget {
  private props: BudgetProps;
  private extraDiscount: number;

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

  addItem(product: Product) {
    this.props.itens.push(product);
  }

  get state() {
    return this.props.state;
  }

  set state(state: BudgetState) {
    this.props.state = state;
  }

  set addExtraDiscount(value: number) {
    this.extraDiscount = value;
    this.recalculateBudget;
  }

  recalculateBudget() {
    this.itens.forEach((e) => {
      this.props.value += e.value;
    });
    this.props.value - this.extraDiscount;
  }
}
