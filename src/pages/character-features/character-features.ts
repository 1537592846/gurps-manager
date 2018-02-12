import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterStatusPage } from '../character-status/character-status';
import { Character } from '../../../models/Character'

@Component({
  selector: 'page-character-features',
  templateUrl: 'character-features.html'
})
export class CharacterFeaturesPage {

  new_char=new Character(0);

  constructor(public navCtrl: NavController) {
  }
  goToCharacterStatus(params) {
    this.navCtrl.push(CharacterStatusPage, {new_char:this.new_char});
  }
}