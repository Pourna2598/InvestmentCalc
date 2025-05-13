import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ExpenseResultsComponent } from "./expense-results/expense-results.component";
import { FormsModule } from "@angular/forms";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
    declarations:[
        AppComponent,
        HeaderComponent,
        ExpenseResultsComponent
    ],
    imports:[UserInputModule],
    bootstrap: [AppComponent]
})
export class AppModule{}