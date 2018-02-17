import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-extras',
  templateUrl: 'extras.html'
})
export class ExtrasPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  char: Character;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Getting data
    this.char = this.navParams.get('char');
  }

}
