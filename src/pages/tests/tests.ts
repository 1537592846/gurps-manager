import { Component } from '@angular/core';
import { NavParams, NavController, ModalController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { ModalTest } from '../modal-test/modal-test';

@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html'
})
export class TestsPage {

  char: Character;
  profileModal: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    //Getting data
    this.char = navParams.data
  }
  ionViewWillEnter() {
    //Getting data
    this.char;
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
      this.char.destroyShield();
    }
  }
  addShield() {
    if (this.char.equipments.shield.current_life_points < this.char.equipments.shield.max_life_points) {
      this.char.equipments.shield.current_life_points += 1;
    }
  }
  //Tests
  openTestModel(test:string){
    this.profileModal = this.modalCtrl.create(ModalTest, {char:this.char,test:test })
    this.profileModal.present();
  }
}
