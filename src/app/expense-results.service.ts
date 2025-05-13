import { Injectable } from "@angular/core";
import { ExpenseData, ResultData } from "./expense-data.model";

@Injectable({
    providedIn: 'root'
})
export class ExpenseResult {
    resultData  : ResultData[] =[]
 calculateEfficiencyScore(data: ExpenseData) {
    //destructuring data
    const { expense, category, expectedExpense, dateSpent } = data;
    const rawEfficiency = (expectedExpense - expense) / expectedExpense;
    const efficiency = parseFloat(rawEfficiency.toFixed(2));
    let resultMsg = '';
    if (efficiency > 0.2) {
      resultMsg = `✅ Great! You're well under budget. Score: ${efficiency}`;
    } else if (efficiency >= 0) {
      resultMsg = `🟡 You're on track. Score: ${efficiency}`;
    } else {
      resultMsg = `🔴 Over budget. Score: ${efficiency}`;
    }
    //alert(resultMsg);
    this.resultData.push({ dateSpent, category, resultMsg });
    //console.log(this.resultsData)
  }
}