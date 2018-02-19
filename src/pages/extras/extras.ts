import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-extras',
  templateUrl: 'extras.html'
})
export class ExtrasPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  char: Character;
  constructor(public navParams: NavParams) {
    //Getting data
    this.char = navParams.get('charParam');
  }

}
