import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html'
})
export class InventoryPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  char:Character;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Getting data
    this.char = this.navParams.get('char');
  }
  
}
