import { Product } from "./products";
import { BudgetState } from "./status/stateInterface";

export interface BudgetProps {
  itens: Array<Product>;
  value: number;
  status: BudgetState;
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
    if ((this.props.status = BudgetStatus.Pending)) {
      this.props.itens.push(product);
    } else throw Error("Cannot add itens in a closed budget");
  }

  get status() {
    return this.props.status;
  }

  set status(status: BudgetState) {
    this.props.status = status;
  }

  recalculateBudget() {
    this.itens.forEach((e) => {
      this.props.value += e.value;
    });
  }
}
