import { Component, inject, Input } from '@angular/core';
import { ResultData } from '../expense-data.model';
import { ExpenseResult } from '../expense-results.service';

@Component({
  selector: 'app-expense-results',
  standalone: true,
  imports: [],
  templateUrl: './expense-results.component.html',
  styleUrl: './expense-results.component.css'
})
export class ExpenseResultsComponent {
  private ExpenseService = inject(ExpenseResult)
  get results(){
    return this.ExpenseService.resultData;
  }
}
