import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character'
import { Validators } from '@angular/forms';
import { CharacterDisadvantagesPage } from '../character-disadvantages/character-disadvantages';

@Component({
  selector: 'page-character-features',
  templateUrl: 'character-features.html'
})
export class CharacterFeaturesPage {

  new_char:Character;
  form_validation:any;

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
    this.form_validation={
      new_char:{
        name:[Validators.pattern('[a-zA-Z ]*')],
        char_min_stats_points:[Validators.pattern('[0-9]*')],
        max_points:[Validators.pattern('[0-9]*')],
        resource:[Validators.pattern('[0-9]*')]
      }
    }
  }
  goToCharacterDisadvantages(params) {
    this.navCtrl.push(CharacterDisadvantagesPage, {new_char:this.new_char});
  }
}