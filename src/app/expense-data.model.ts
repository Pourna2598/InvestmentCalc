export interface ExpenseData {
  expense: number;
  category: string;
  expectedExpense: number;
  dateSpent: string;
}

export interface ResultData {
  dateSpent: string;
  category: string;
  resultMsg: string;
}
