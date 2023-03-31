import { Product } from "./products";

export enum BudgetStatus {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
  Closed = "closed",
}
export interface BudgetProps {
  itens: Array<Product>;
  value: number;
  status: BudgetStatus;
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

  set status(status: BudgetStatus) {
    if (this.props.status != BudgetStatus.Closed) {
      this.props.status = status;
    } else throw Error("Cannot change status of a closed budget");
  }

  recalculateBudget() {
    this.itens.forEach((e) => {
      this.props.value += e.value;
    });
  }
}
