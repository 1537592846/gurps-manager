import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterFeaturesPage } from '../character-features/character-features';
import { CharacterStatusPage } from '../character-status/character-status';

@Component({
  selector: 'page-gurps-manager',
  templateUrl: 'gurps-manager.html'
})
export class GurpsManagerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToCharacterFeatures(params){
    if (!params) params = {};
    this.navCtrl.push(CharacterFeaturesPage);
  }goToCharacterStatus(params){
    if (!params) params = {};
    this.navCtrl.push(CharacterStatusPage);
  }
}
