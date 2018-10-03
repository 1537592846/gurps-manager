import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterFeaturesPage } from '../character-features/character-features';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { Character } from '../../../models/Character';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-gurps-manager',
  templateUrl: 'gurps-manager.html'
})


export class GurpsManagerPage {
  constructor(public navCtrl: NavController,public dataProvider:DataProvider) {
    console.clear()
  }

  goToCharacterFeatures() {
    this.navCtrl.push(CharacterFeaturesPage, { new_char: new Character(0,this.dataProvider)});
  }

  goToTabsController() {
    this.navCtrl.setRoot(TabsControllerPage, { char: new Character(0,this.dataProvider) });
  }
}
