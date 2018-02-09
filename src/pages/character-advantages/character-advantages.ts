import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterDisadvantagesPage } from '../character-disadvantages/character-disadvantages';

@Component({
  selector: 'page-character-advantages',
  templateUrl: 'character-advantages.html'
})
export class CharacterAdvantagesPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToCharacterDisadvantages(params){
    if (!params) params = {};
    this.navCtrl.push(CharacterDisadvantagesPage);
  }
}
