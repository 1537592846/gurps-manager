import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterDisadvantagesPage } from '../character-disadvantages/character-disadvantages';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-character-advantages',
  templateUrl: 'character-advantages.html'
})
export class CharacterAdvantagesPage {

  new_char: Character;

  constructor(public navCtrl: NavController) {
  }
  goToCharacterDisadvantages() {
    this.navCtrl.push(CharacterDisadvantagesPage, this.new_char);
  }
}
