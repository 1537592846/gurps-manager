import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { Shield } from '../../../models/Item';
import { Equipment } from '../../../models/Equipment';

@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html'
})
export class TestsPage {

  char: Character;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Getting data
    this.char = this.navParams.get('char');
    console.log(this.char);
  }
  // Life functions
  removeLife() {
    this.char.current_life_points -= 1;
  }
  addLife() {
    if (this.char.current_life_points < this.char.max_life_points) {
      this.char.current_life_points += 1;
    }
  }
  //Fatigue functions
  removeFatigue() {
    this.char.current_fatigue_points -= 1;
  }
  addFatigue() {
    if (this.char.current_fatigue_points < this.char.max_fatigue_points) {
      this.char.current_fatigue_points += 1;
    }
  }
  //Shield functions
  removeShield() {
    this.char.equipments.shield.current_life_points -= 1;
    if (this.char.equipments.shield.current_life_points == 0) {
      this.char.equipments.destroyShield();
    }
  }
  addShield() {
    if (this.char.equipments.shield.current_life_points < this.char.equipments.shield.max_life_points) {
      this.char.equipments.shield.current_life_points += 1;
    }
  }
}
