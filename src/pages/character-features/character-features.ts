import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterStatusPage } from '../character-status/character-status';

@Component({
  selector: 'page-character-features',
  templateUrl: 'character-features.html'
})
export class CharacterFeaturesPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToCharacterStatus(params){
    if (!params) params = {};
    this.navCtrl.push(CharacterStatusPage);
  }
}
