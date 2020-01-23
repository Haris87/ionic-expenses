import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MonthTabPage } from "./month-tab.page";
import { ModalPage } from "./dialog/add-expense.modal.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: MonthTabPage }])
  ],
  declarations: [MonthTabPage, ModalPage],
  entryComponents: [ModalPage]
})
export class MonthTabPageModule {}
