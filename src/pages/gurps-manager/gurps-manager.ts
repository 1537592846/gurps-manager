import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterFeaturesPage } from '../character-features/character-features';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-gurps-manager',
  templateUrl: 'gurps-manager.html'
})
export class GurpsManagerPage {
  constructor(public navCtrl: NavController) {
  }
  goToCharacterFeatures() {
    var char=Character.emptyCharacter();
    console.log(char);
    this.navCtrl.push(CharacterFeaturesPage,{new_char:char});
  }
  goToTabsController() {
    this.navCtrl.push(TabsControllerPage);
  }
}
