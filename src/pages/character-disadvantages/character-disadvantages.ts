import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { CharacterResumePage } from '../character-resume/character-resume';

@Component({
  selector: 'page-character-disadvantages',
  templateUrl: 'character-disadvantages.html'
})
export class CharacterDisadvantagesPage {

  new_char: Character;

  constructor(public navCtrl: NavController) {
  }

  goToCharacterResume() {
    this.navCtrl.push(CharacterResumePage, this.new_char);
  }
}
