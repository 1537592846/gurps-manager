import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { CharacterFeaturesPage } from '../character-features/character-features';
import { GurpsManagerPage } from '../gurps-manager/gurps-manager';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-character-resume',
  templateUrl: 'character-resume.html'
})
export class CharacterResumePage {

  new_char: Character;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
  }
  goToTabsController() {
    console.log(this.new_char)
    this.navCtrl.setRoot(TabsControllerPage, { char: this.new_char });
  }
  goToCharacterFeatures() {
    this.navCtrl.setRoot(CharacterFeaturesPage, { new_char: this.new_char });
  }
  goToGurpsManager() {
    this.navCtrl.push(GurpsManagerPage);
  }
}
