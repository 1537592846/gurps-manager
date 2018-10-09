import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { Advantage } from '../../../models/Advantage';
import { ModalAdvantages } from '../modal-advantages/modal-advantages';
import { CharacterStatusPage } from '../character-status/character-status';

@Component({
  selector: 'page-character-advantages',
  templateUrl: 'character-advantages.html'
})
export class CharacterAdvantagesPage {

  new_char: Character;
  profileModal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
  }
  goToNextPage() {
    this.navCtrl.push(CharacterStatusPage, { new_char: this.new_char });
  }
  removeAdvantage(advantage: Advantage) {
    for (var i = 0; i < this.new_char.advantages.length; i++) {
      if (this.new_char.advantages[i].name == advantage.name) {
        this.new_char.advantages.splice(i, 1);
        this.new_char.current_points -= advantage.cost * advantage.level
      }
    }
  }
  openModal() {
    this.profileModal = this.modalCtrl.create(ModalAdvantages, { advantages: this.new_char.advantages })
    this.profileModal.present();
    this.profileModal.onDidDismiss(advantage => {
      if (advantage != null) {
        advantage.level = 1
        this.new_char.advantages.push(advantage)
        this.new_char.current_points += advantage.cost
      }
    })
  }
  addAdvantageLevel(advantage: Advantage) {
    var index = this.new_char.advantages.indexOf(advantage);
    this.new_char.advantages[index].level++;
    this.new_char.current_points += advantage.cost
  }
  removeAdvantageLevel(advantage: Advantage) {
    var index = this.new_char.advantages.indexOf(advantage);
    this.new_char.advantages[index].level--;
    this.new_char.current_points -= advantage.cost
  }
}
