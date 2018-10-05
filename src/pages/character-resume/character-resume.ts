import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { CharacterFeaturesPage } from '../character-features/character-features';
import { GurpsManagerPage } from '../gurps-manager/gurps-manager';
import { Character } from '../../../models/Character';
import { Language } from '../../../models/Language';
import { Constants } from '../../../models/Constants';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-character-resume',
  templateUrl: 'character-resume.html'
})
export class CharacterResumePage {

  new_char: Character;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
  }
  goToTabsController() {
    this.new_char.current_fatigue_points=this.new_char.max_fatigue_points
    this.new_char.current_life_points=this.new_char.max_life_points
    this.dataProvider.saveCharacter(this.new_char).then(res => {
      if (res) {
        console.log("Sucesso")
        this.navCtrl.setRoot(TabsControllerPage, { char: this.new_char });
      } else {
        console.log("Erro")
      }
    })
      .catch(error => { console.log(error) })
  }
  goToCharacterFeatures() {
    this.navCtrl.setRoot(CharacterFeaturesPage, { new_char: this.new_char });
  }
  goToGurpsManager() {
    this.navCtrl.push(GurpsManagerPage);
  }
  getLanguageDescription(language: Language): string {
    if (this.new_char.languages[0] == language) {
      return Constants.LanguageLevel[4]
    } else {
      return Constants.LanguageLevel[language.level]
    }
  }
}
