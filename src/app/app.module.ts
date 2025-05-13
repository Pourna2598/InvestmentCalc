import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { ExpenseResultsComponent } from "./expense-results/expense-results.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        AppComponent,
        HeaderComponent,
        UserInputComponent,
        ExpenseResultsComponent
    ],
    imports:[FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule{}