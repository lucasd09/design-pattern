import { Budget } from "../budgets";
import { Rejected } from "./rejected";
import { BudgetState } from "./stateInterface";

export class Closed implements BudgetState {
  ApplyExtraDiscount(budget: Budget) {
    budget.addExtraDiscount += budget.budgetValue * 0.05;
  }
  Approve(budget: Budget) {
    throw Error("Budget closed");
  }
  Reject(budget: Budget) {
    throw Error("Budget closed");
  }
  Close(budget: Budget) {
    throw Error("Budget closed");
  }
}
