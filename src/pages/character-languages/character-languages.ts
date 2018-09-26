import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { Language } from '../../../models/Language';
import { CharacterResumePage } from '../character-resume/character-resume';
import { Cost } from '../../../models/Cost';

@Component({
  selector: 'page-character-languages',
  templateUrl: 'character-languages.html'
})
export class CharacterLanguagesPage {

  new_char: Character;
  profileModal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
  }
  goToCharacterResume() {
    this.navCtrl.push(CharacterResumePage, { new_char: this.new_char });
  }
  removeLanguage(language: Language) {
    for (var i = 0; i < this.new_char.languages.length; i++) {
      if (this.new_char.languages[i] == language) {
        this.new_char.languages.splice(i, 1);
        if (this.new_char.languages.length == 0) {
          this.new_char.current_points -= language.level * Cost.LanguageLevel
        }
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
        this.new_char.current_points -= advantage.cost
      }
    })
  }
  addAdvantageLevel(advantage: Advantage) {
    var index = this.new_char.advantages.indexOf(advantage);
    this.new_char.advantages[index].level++;
    this.new_char.current_points -= advantage.cost
  }
  removeAdvantageLevel(advantage: Advantage) {
    var index = this.new_char.advantages.indexOf(advantage);
    this.new_char.advantages[index].level--;
    this.new_char.current_points += advantage.cost
  }
}