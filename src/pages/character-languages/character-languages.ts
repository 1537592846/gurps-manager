import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterAdvantagesPage } from '../character-advantages/character-advantages';
import { CharacterDisadvantagesPage } from '../character-disadvantages/character-disadvantages';

@Component({
  selector: 'page-character-languages',
  templateUrl: 'character-languages.html'
})
export class CharacterLanguagesPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToCharacterAdvantages(params){
    if (!params) params = {};
    this.navCtrl.push(CharacterAdvantagesPage);
  }goToCharacterDisadvantages(params){
    if (!params) params = {};
    this.navCtrl.push(CharacterDisadvantagesPage);
  }
}
