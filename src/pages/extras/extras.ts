import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { DataProvider } from '../../providers/data/data';
import { GurpsManagerPage } from '../gurps-manager/gurps-manager';

@Component({
  selector: 'page-extras',
  templateUrl: 'extras.html'
})
export class ExtrasPage {

  char: Character;

  constructor(public navParams: NavParams,public navControl:NavController, public dataProvider: DataProvider) {
    //Getting data
    this.char = navParams.data
  }
  getCharCarryCategory() {
    return this.char.getCarryCategory();
  }
  getCharMovement() {
    return this.char.getMovement();
  }
  getCharDodge() {
    return this.char.getDodge();
  }

  goHome(){
    this.dataProvider.saveCharacter(this.char).then(res => {
      if (!res) {
        console.log("Error saving character");
      }
    })
    this.navControl.setRoot(GurpsManagerPage, {     });
  }
}
