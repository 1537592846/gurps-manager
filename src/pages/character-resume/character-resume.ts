import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GurpsManagerPage } from '../gurps-manager/gurps-manager';
import { CharacterFeaturesPage } from '../character-features/character-features';
import { CharacterStatusPage } from '../character-status/character-status';

@Component({
  selector: 'page-character-resume',
  templateUrl: 'character-resume.html'
})
export class CharacterResumePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToGurpsManager(params){
    if (!params) params = {};
    this.navCtrl.push(GurpsManagerPage);
  }goToCharacterFeatures(params){
    if (!params) params = {};
    this.navCtrl.push(CharacterFeaturesPage);
  }goToCharacterStatus(params){
    if (!params) params = {};
    this.navCtrl.push(CharacterStatusPage);
  }
}
