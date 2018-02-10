import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GurpsManagerPage } from '../gurps-manager/gurps-manager';
import { CharacterFeaturesPage } from '../character-features/character-features';
import { CharacterStatusPage } from '../character-status/character-status';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-character-resume',
  templateUrl: 'character-resume.html'
})
export class CharacterResumePage {

new_char:Character;

  constructor(public navCtrl: NavController) {
  }
  goToTabsControllers() {
    this.navCtrl.push(CharacterFeaturesPage,this.new_char);
  }
  goToCharacterStatus() {
    this.navCtrl.push(CharacterStatusPage,this.new_char);
  }
  goToGurpsManager() {
    this.navCtrl.push(GurpsManagerPage);
  }
}
