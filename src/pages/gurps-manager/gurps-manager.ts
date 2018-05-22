import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterFeaturesPage } from '../character-features/character-features';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { Character } from '../../../models/Character';
import { Advantage, AdvantageProvider } from '../../../models/Advantage';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-gurps-manager',
  templateUrl: 'gurps-manager.html'
})


export class GurpsManagerPage {
  advantages: Advantage[] = []
  constructor(public navCtrl: NavController, public dbProvider: DatabaseProvider) {
    new AdvantageProvider(dbProvider).getAll()
      .then((result: any) => {
        console.log("Result:" + result)
      });
  }

  goToCharacterFeatures() {
    this.navCtrl.push(CharacterFeaturesPage, { new_char: Character.emptyCharacter() });
  }

  goToTabsController() {
    var char = new Character(0);
    this.navCtrl.setRoot(TabsControllerPage, { char: char });
  }
}
