import { Component, Input } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: "modal-page",
  templateUrl: "add-expense-modal.html"
})
export class ModalPage {
  constructor(private modalController: ModalController) {}

  name: string = "";
  price: number = 0;

  addExpense() {
    alert(this.name + " " + this.price);
    this.close();
  }

  close() {
    this.modalController.dismiss({
      dismissvalue: "value"
    });
  }
}

@Component({
  selector: "add-expense-modal",
  templateUrl: "add-expense-modal.html",
  styleUrls: ["./add-expense-modal.scss"]
})
export class ModalExample {
  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    modal.onDidDismiss().then(data => {
      console.log("dismissed", data);
    });
    return await modal.present();
  }
}
