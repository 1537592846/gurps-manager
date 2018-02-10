import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterSkillsPage } from '../character-skills/character-skills'
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-character-languages',
  templateUrl: 'character-languages.html'
})
export class CharacterLanguagesPage {

  new_char: Character;

  constructor(public navCtrl: NavController) {
  }
  goToCharacterSkills() {
    this.navCtrl.push(CharacterSkillsPage, this.new_char);
  }
}
