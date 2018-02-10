import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterLanguagesPage } from '../character-languages/character-languages';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-character-status',
  templateUrl: 'character-status.html'
})
export class CharacterStatusPage {

  new_char: Character;

  constructor(public navCtrl: NavController) {
  }
  goToCharacterLanguages() {
    this.navCtrl.push(CharacterLanguagesPage, this.new_char);
  }
  getMaxStatus() {
    return this.new_char.min_status;
  }
  getMaxStrenght() {
    //return new_char.max_points div this.char_strength-new_char.min_status*10
  }
}
