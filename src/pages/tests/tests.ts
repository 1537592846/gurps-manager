import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { Shield } from '../../../models/Item';

@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html'
})
export class TestsPage {

  char = new Character(0);

  constructor(public navCtrl: NavController) {

    this.char.name = "Ryuzaki";
    this.char.current_life_points = 10;
    this.char.max_life_points = 11;
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
  //Effort functions
  removeEffort() {
    this.char.current_effort_points -= 1;
  }
  addEffort() {
    if (this.char.current_effort_points < this.char.max_effort_points) {
      this.char.current_effort_points += 1;
    }
  }
  //Shield functions
  removeSheild() {
  }
  addSheild() {
  }
  //Status tests
  strenghtTest() {

  }
  dexterityTest() {

  }
  intelligenceTest() {

  }
  healthTest() {

  }
}
