import { ViewController, NavParams } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";
import { Component } from "@angular/core";

@Component({
  selector: 'modal-test.html',
  templateUrl: 'modal-test.html'
})
export class ModalTest {

  constructor(public viewCtrl: ViewController, public params: NavParams, public dataProvider: DataProvider) {
  }
}