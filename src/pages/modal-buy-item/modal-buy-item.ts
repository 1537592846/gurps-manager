import { ViewController, NavParams } from 'ionic-angular'
import { Component } from '@angular/core'
import { DataProvider } from '../../providers/data/data'

@Component({
  selector: 'modal-languages.html',
  templateUrl: 'modal-languages.html'
})
export class ModalBuyItems {

  constructor(public viewCtrl: ViewController, public params: NavParams, public dataProvider: DataProvider) {
  }

  
  returnData(item:any) {
    this.viewCtrl.dismiss(item)
  }
}