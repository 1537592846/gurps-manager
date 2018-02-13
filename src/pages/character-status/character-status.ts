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
  max_strenght: number;
  max_dexterity: number;
  max_intelligence: number;
  max_health: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
    //Setting values
    this.new_char.current_points = 0;
    //Setting minimun values
    this.new_char.strenght = this.new_char.min_status * 1;
    this.new_char.dexterity = this.new_char.min_status * 1;
    this.new_char.intelligence = this.new_char.min_status * 1;
    this.new_char.health = this.new_char.min_status * 1;
    this.new_char.max_points = this.new_char.max_points * 1;
    this.new_char.min_status = this.new_char.min_status * 1;
    //Setting maximun values
    this.updateStrenght();
    this.updateDexterity();
    this.updateIntelligence();
    this.updateHealth();
  }
  goToCharacterLanguages() {
    this.navCtrl.push(CharacterLanguagesPage, { new_char: this.new_char });
  }
  updateStrenght() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_strenght = (this.new_char.max_points - this.new_char.current_points + (this.new_char.strenght - this.new_char.min_status) * 10) / 10 + this.new_char.min_status
    console.log("st");
  }
  updateDexterity() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_dexterity = (this.new_char.max_points - this.new_char.current_points + (this.new_char.dexterity - this.new_char.min_status) * 10) / 10 + this.new_char.min_status
    console.log("dx");
  }
  updateIntelligence() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_intelligence = (this.new_char.max_points - this.new_char.current_points + (this.new_char.intelligence - this.new_char.min_status) * 10) / 10 + this.new_char.min_status
    console.log("iq");
  }
  updateHealth() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_health = (this.new_char.max_points - this.new_char.current_points + (this.new_char.health - this.new_char.min_status) * 10) / 10 + this.new_char.min_status
    console.log("ht");
  }
  getCurrentPoints() {
    this.new_char.current_points = (this.new_char.strenght - this.new_char.min_status) * 10;
    this.new_char.current_points += (this.new_char.dexterity - this.new_char.min_status) * 20;
    this.new_char.current_points += (this.new_char.intelligence - this.new_char.min_status) * 20;
    this.new_char.current_points += (this.new_char.health - this.new_char.min_status) * 10;
  }
}