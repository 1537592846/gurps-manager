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

  constructor(public navCtrl: NavController,new_char:Character) {
    // this.new_char=new_char;
    console.log(new_char);
  }
  goToCharacterLanguages() {
    this.navCtrl.push(CharacterLanguagesPage, {new_char:this.new_char});
  }
}
