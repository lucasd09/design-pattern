import { Budget } from "../budgets";
import { Approved } from "./approved";
import { Closed } from "./closed";
import { Rejected } from "./rejected";
import { BudgetState } from "./stateInterface";

export class Pending implements BudgetState {
  ApplyExtraDiscount(budget: Budget) {
    budget.addExtraDiscount -= budget.budgetValue * 0.05;
  }
  
  Approve(budget: Budget) {
    budget.state = new Approved();
  }
  Reject(budget: Budget) {
    budget.state = new Rejected();
  }
  Close(budget: Budget) {
    budget.state = new Closed();
  }
}
