import { Budget } from "../budgets";
import { Closed } from "./closed";
import { Rejected } from "./rejected";
import { BudgetState } from "./stateInterface";

export class Approved implements BudgetState {
  ApplyExtraDiscount(budget: Budget) {
    budget.addExtraDiscount -= budget.budgetValue * 0.05;
  }
  Approve(budget: Budget) {
    throw Error("Budget already approved");
  }
  Reject(budget: Budget) {
    budget.state = new Rejected();
  }
  Close(budget: Budget) {
    budget.state = new Closed();
  }
}
