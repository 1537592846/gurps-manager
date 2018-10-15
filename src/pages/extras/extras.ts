import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-extras',
  templateUrl: 'extras.html'
})
export class ExtrasPage {

  char: Character;

  constructor(public navParams: NavParams) {
    //Getting data
    this.char = navParams.data
  }
  ionViewWillEnter() {
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
}
