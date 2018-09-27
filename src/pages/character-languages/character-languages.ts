import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { Language } from '../../../models/Language';
import { CharacterResumePage } from '../character-resume/character-resume';
import { Cost } from '../../../models/Cost';
import { ModalLanguages } from '../modal-languages/modal-languages';

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
    this.profileModal = this.modalCtrl.create(ModalLanguages, { languages: this.new_char.languages })
    this.profileModal.present();
    this.profileModal.onDidDismiss(language => {
      if (language != null) {
        language.level = 1
        this.new_char.languages.push(language)
        this.new_char.current_points -= language.cost
      }
    })
  }
  addLanguageLevel(language: Language) {
    var index = this.new_char.languages.indexOf(language);
    this.new_char.languages[index].level++;
    if (index != 0) {
      this.new_char.current_points += language.level * Cost.LanguageLevel
    }
  }
  removeLanguageLevel(language: Language) {
    var index = this.new_char.languages.indexOf(language);
    this.new_char.languages[index].level--;
    if (index != 0) {
      this.new_char.current_points -= language.level * Cost.LanguageLevel

    }
  }
}