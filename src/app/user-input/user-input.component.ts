import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { ExpenseData } from '../expense-data.model';
import { ExpenseResult } from '../expense-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  //@Output() calculate = new EventEmitter<ExpenseData>();
  enteredInitialAmount = '0';
  enteredCategory = '';
  expectedExpense = '';
  dateSpent = '';
  constructor(private expenseService: ExpenseResult){

  }
  onSubmit() {
    this.expenseService.calculateEfficiencyScore({
      expense: +this.enteredInitialAmount,
      category: this.enteredCategory,
      expectedExpense: +this.expectedExpense,
      dateSpent: this.dateSpent,
    })
    this.enteredInitialAmount = '0';
    this.enteredCategory = ""
    this.expectedExpense = ""
  }
}
