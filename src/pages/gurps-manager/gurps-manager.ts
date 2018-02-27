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
    this.navCtrl.push(CharacterFeaturesPage,{new_char:Character.emptyCharacter()});
  }
  goToTabsController() {
    var char=new Character(0);
    this.navCtrl.setRoot(TabsControllerPage,{char:char});
  }
}
