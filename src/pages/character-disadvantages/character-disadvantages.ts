import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { Disadvantage } from '../../../models/Disadvantage';
import { CharacterAdvantagesPage } from '../character-advantages/character-advantages';
import { ModalDisadvantages } from '../modal-disadvantages/modal-disadvantages';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-character-disadvantages',
  templateUrl: 'character-disadvantages.html'
})
export class CharacterDisadvantagesPage {

  new_char: Character;
  profileModal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
  }
  goToNextPage() {
    this.navCtrl.push(CharacterAdvantagesPage, { new_char: this.new_char });
  }
  removeDisadvantage(disadvantage: Disadvantage) {
    for (var i = 0; i < this.new_char.disadvantages.length; i++) {
      if (this.new_char.disadvantages[i] == disadvantage) {
        this.new_char.disadvantages.splice(i, 1);
        this.new_char.current_points += disadvantage.cost*disadvantage.level
      }
    }
  }
  openModal() {
    this.profileModal = this.modalCtrl.create(ModalDisadvantages,{disadvantages:this.new_char.disadvantages})
    this.profileModal.present();
    this.profileModal.onDidDismiss(disadvantage => {
      if (disadvantage != null) {
        disadvantage.level=1
        this.new_char.disadvantages.push(disadvantage)
        this.new_char.current_points -= disadvantage.cost
      }
    })
  }
  addDisadvantageLevel(disadvantage:Disadvantage){
    var index=this.new_char.disadvantages.indexOf(disadvantage);
    this.new_char.disadvantages[index].level++;
    this.new_char.current_points -= disadvantage.cost
  }
  removeDisadvantageLevel(disadvantage:Disadvantage){
    var index=this.new_char.disadvantages.indexOf(disadvantage);
    this.new_char.disadvantages[index].level--;
    this.new_char.current_points += disadvantage.cost
  }
}
