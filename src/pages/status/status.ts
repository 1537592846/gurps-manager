import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { DataProvider } from '../../providers/data/data';
import { GurpsManagerPage } from '../gurps-manager/gurps-manager';

@Component({
  selector: 'page-status',
  templateUrl: 'status.html'
})
export class StatusPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  char: Character;
  constructor(public navParams: NavParams,public navCtrl:NavController, public dataProvider: DataProvider) {
    //Getting data
    this.char = navParams.data
    
  }

  goHome(){
    this.dataProvider.saveCharacter(this.char).then(res => {
      if (!res) {
        alert("Error saving character");
      }
    })
    this.navCtrl.setRoot(GurpsManagerPage, {     });
  }
}
