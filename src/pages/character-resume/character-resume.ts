import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { CharacterFeaturesPage } from '../character-features/character-features';
import { GurpsManagerPage } from '../gurps-manager/gurps-manager';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-character-resume',
  templateUrl: 'character-resume.html'
})
export class CharacterResumePage {

new_char:Character;

  constructor(public navCtrl: NavController) {
  }
  goToTabsController() {
    this.navCtrl.push(TabsControllerPage,this.new_char);
  }
  goToCharacterFeatures() {
    this.navCtrl.push(CharacterFeaturesPage,this.new_char);
  }a
  goToGurpsManager() {
    this.navCtrl.push(GurpsManagerPage);
  }
}
