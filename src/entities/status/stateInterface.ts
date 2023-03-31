import { Budget } from "../budgets";

export interface BudgetState {
  ApplyExtraDiscount(budget: Budget): void;
  Approve(budget: Budget): void;
  Reject(budget: Budget): void;
  Close(budget: Budget): void;
}
