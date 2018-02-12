import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CharacterLanguagesPage } from '../character-languages/character-languages';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-character-status',
  templateUrl: 'character-status.html'
})
export class CharacterStatusPage {

  new_char: Character;
  max_strenght:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.new_char = this.navParams.get('new_char');
    this.new_char.strenght=this.new_char.min_status;
    this.new_char.dexterity=this.new_char.min_status;
    this.new_char.intelligence=this.new_char.min_status;
    this.new_char.health=this.new_char.min_status;
    this.max_strenght=this.getMaxStatus("strenght");
  }
  goToCharacterLanguages() {
    this.navCtrl.push(CharacterLanguagesPage, { new_char: this.new_char });
  }
  getMinStatus() {
    return this.new_char.min_status;
  }
  getMaxStatus(range: string) {
    switch (range) {
      case "strenght":
      case "health": {
        console.log(((this.new_char.max_points / 10) + this.new_char.min_status));
        return ((this.new_char.max_points / 10) + this.new_char.min_status);
      }
      default: {
        return 0;
      }
    }
  }
}