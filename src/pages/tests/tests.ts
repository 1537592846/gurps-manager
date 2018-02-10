import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html'
})
export class TestsPage {

  new_char = Character;

  constructor(public navCtrl: NavController) {
  }
  // Life functions
  minusLife() {

  }
  valueLife() {

  }
  plusLife() {

  }
  //Effort functions
  minusEffort() {

  }
  valueEffort() {

  }
  plusEffort() {

  }
  //Shield functions
  minusSheild() {

  }
  valueSheild() {

  }
  plusSheild() {

  }
  //Status tests
  strenghtTest(){
    
  }
  dexterityTest(){
    
  }
  intelligenceTest(){
    
  }
  healthTest(){
    
  }
}
