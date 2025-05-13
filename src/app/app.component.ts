import { Component, signal } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type { ExpenseData, ResultData } from './expense-data.model';
import { ExpenseResultsComponent } from './expense-results/expense-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, ExpenseResultsComponent],
})
export class AppComponent {
 
}
