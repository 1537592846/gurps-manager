import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-status',
  templateUrl: 'status.html'
})
export class StatusPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  char: Character;
  constructor(public navParams: NavParams) {
    //Getting data
    this.char = navParams.get('new_char');
  }
}
