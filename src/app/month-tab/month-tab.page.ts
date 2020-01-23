import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalPage } from "./dialog/add-expense.modal.component";

@Component({
  selector: "app-month-tab",
  templateUrl: "month-tab.page.html",
  styleUrls: ["month-tab.page.scss"]
})
export class MonthTabPage {
  constructor(private modalController: ModalController) {}

  list: Array<any> = [];

  ngOnInit() {
    this.list = [
      {
        name: "Σουπερμάρκετ",
        date: new Date().toISOString(),
        price: 2
      },
      {
        name: "Φαρμακείο",
        date: new Date().toISOString(),
        price: 5
      },
      {
        name: "Βενζίνη",
        date: new Date().toISOString(),
        price: 20
      },
      {
        name: "Delivery",
        date: new Date().toISOString(),
        price: 9
      }
    ];
  }

  async addExpenseModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }
}
