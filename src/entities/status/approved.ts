import { Budget } from "../budgets";
import { BudgetState } from "./stateInterface";

export class Approved implements BudgetState {
  ApplyExtraDiscount(budget: Budget) {
    budget.addExtraDiscount -= budget.budgetValue * 0.05;
  }
  Approve(budget: Budget) {
    throw Error("Budget already approved");
  }
  Reject(budget: Budget) {
    budget.status = new Rejected();
  }
  Close(budget: Budget) {
    budget.status = new Closed();
  }
}
