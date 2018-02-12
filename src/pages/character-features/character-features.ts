import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterStatusPage } from '../character-status/character-status';
import { Character } from '../../../models/Character'
import { Validators } from '@angular/forms';

@Component({
  selector: 'page-character-features',
  templateUrl: 'character-features.html'
})
export class CharacterFeaturesPage {

  new_char=new Character(0);
  form_validation:any;

  constructor(public navCtrl: NavController) {
    this.form_validation={
      new_char:{
        name:[Validators.pattern('[a-zA-Z ]*')],
        char_min_stats_points:[Validators.pattern('[0-9]*')],
        max_points:[Validators.pattern('[0-9]*')],
        resource:[Validators.pattern('[0-9]*')]
      }
    }
  }
  goToCharacterStatus(params) {
    this.navCtrl.push(CharacterStatusPage, {new_char:this.new_char});
  }
}