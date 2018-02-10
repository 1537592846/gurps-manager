import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterStatusPage } from '../character-status/character-status';
import { Character } from '../../../models/Character'

@Component({
  selector: 'page-character-features',
  templateUrl: 'character-features.html'
})
export class CharacterFeaturesPage {

  new_char: Character;

  constructor(public navCtrl: NavController) {
  }
  goToCharacterStatus(params) {
    // this.new_char.char_name=params.char_name;
    // this.new_char.char_age=params.char_age;
    // this.new_char.char_height=params.char_height;
    // this.new_char.char_weight=params.char_weight;
    // this.new_char.char_min_status=params.char_min_status;
    // this.new_char.char_max_points=params.char_max_points;
    // this.new_char.char_resource=params.char_resource;
    // this.new_char.char_description=params.char_description;
    this.navCtrl.push(CharacterStatusPage, this.new_char);
  }
}
