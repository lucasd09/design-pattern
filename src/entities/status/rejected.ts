import { Budget } from "../budgets";
import { Approved } from "./approved";
import { BudgetState } from "./stateInterface";

export class Rejected implements BudgetState {
  ApplyExtraDiscount(budget: Budget) {
    budget.addExtraDiscount -= budget.budgetValue * 0.05;
  }
  Approve(budget: Budget) {
    budget.status = new Approved();
  }
  Reject(budget: Budget) {
    throw Error("Budget already Rejected");
  }
  Close(budget: Budget) {
    budget.status = new Closed();
  }
}
